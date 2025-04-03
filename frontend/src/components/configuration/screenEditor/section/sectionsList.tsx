import { useAppDispatch, useAppSelector } from "@/redux/store";
import { SectionItem } from "./sectionItem";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { editSections } from "@/redux/activeConfigSlice";
import { DnDWrapper } from "../dndHelpers/dndWrapper";

export const SectionsList = () => {
  const sections = useAppSelector((state) => state.activeConfig.sections);
  const dispatch = useAppDispatch();
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(
        (section) => section._id === active.id
      );
      const newIndex = sections.findIndex((section) => section._id === over.id);
      const newSections = arrayMove(sections, oldIndex, newIndex);
      dispatch(editSections(newSections));
    }
  };
  return (
    <DnDWrapper
      handleDragEnd={handleDragEnd}
      items={sections.map((section) => section._id)}
    >
      <div className="space-y-4">
        {sections.length === 0 ? (
          <div className="text-center p-8 border border-dashed rounded-lg text-muted-foreground">
            No sections added yet. Click "Add Section" to create your first
            section.
          </div>
        ) : (
          sections.map((section) => (
            <SectionItem key={section._id} section={section} />
          ))
        )}
      </div>
    </DnDWrapper>
  );
};
