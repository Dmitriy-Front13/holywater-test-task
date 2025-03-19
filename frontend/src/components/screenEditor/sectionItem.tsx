import { useCustomSortable } from "@/hooks/useCustomSortable";
import { DragHandleItem } from "./dragHandleItem";
import { ISection } from "@/types";
import { ItemsList } from "./itemsList";
interface ISectionItemProps {
  section: ISection;
}
export const SectionItem = ({ section }: ISectionItemProps) => {
  const { attributes, listeners, setNodeRef, style } = useCustomSortable(
    section._id
  );
  return (
    <div ref={setNodeRef} style={style} className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <DragHandleItem attributes={attributes} listeners={listeners} />
          <h3 className="text-lg font-medium">{section.title}</h3>
          <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
            {section.type}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <ItemsList items={section.items} sectionId={section._id} />
      </div>
    </div>
  );
};
