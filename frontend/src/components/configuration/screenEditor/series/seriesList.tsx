import { DnDWrapper } from "../dndHelpers/dndWrapper";
import { ISeries } from "@/types";
import { useAppDispatch } from "@/redux/store";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { editSectionItems } from "@/redux/activeConfigSlice";
import { SeriesItem } from "./seriesItem";

export interface IItemListProps {
  items: ISeries[];
  sectionId: string;
}

export const SeriesList = ({ items, sectionId }: IItemListProps) => {
  const dispatch = useAppDispatch();
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item._id === active.id);
      const newIndex = items.findIndex((item) => item._id === over.id);
      const newItems = arrayMove(items, oldIndex, newIndex);
      dispatch(editSectionItems({ sectionId, items: newItems }));
    }
  };
  const handleRemoveSeries = (id: string) => {
    const updated = items.filter((i) => i._id !== id);
    dispatch(editSectionItems({ sectionId, items: updated }));
  };

  return (
    <>
      <DnDWrapper
        items={items.map((item) => item._id)}
        handleDragEnd={handleDragEnd}
      >
        {items.length === 0 ? (
          <div className="text-center p-4 border border-dashed rounded-md text-muted-foreground">
            No items in this section. Click "Add Item" to create one.
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <SeriesItem
                item={item}
                key={item._id}
                handleDeleteItem={handleRemoveSeries}
              />
            ))}
          </div>
        )}
      </DnDWrapper>
    </>
  );
};
