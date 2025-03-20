import { DnDWrapper } from "./dndWrapper";
import { ISectionItem } from "@/types";
import { ItemComponent } from "./itemComponent";
import { useAppDispatch } from "@/redux/store";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { editSectionItems } from "@/redux/activeConfigSlice";

export interface IItemListProps {
  items: ISectionItem[];
  sectionId: string;
}

export const ItemsList = ({ items, sectionId }: IItemListProps) => {
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
  return (
    <>
      {/* <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium">Items</h4>
        <Button
          variant="outline"
          size="sm"
          // onClick={onAddItem}
        >
          Add Item
        </Button>
      </div> */}
      <DnDWrapper
        items={items.map((item) => item._id)}
        handleDragEnd={handleDragEnd}
      >
        {items.length === 0 && (
          <div className="text-center p-4 border border-dashed rounded-md text-muted-foreground">
            No items in this section. Click "Add Item" to create one.
          </div>
        )}
        <div className="space-y-2">
          {items.map((item) => (
            <ItemComponent item={item} />
          ))}
        </div>
      </DnDWrapper>
    </>
  );
};
