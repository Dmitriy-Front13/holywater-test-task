import { useCustomSortable } from "@/components/screenEditor/dndHelpers/useCustomSortable";
import { DragHandleItem } from "../dndHelpers/dragHandleItem";
import { ISection } from "@/types";
import { ItemsList } from "../items/itemsList";
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
        </div>
      </div>
      <div className="mt-2">
        <ItemsList items={section.items} sectionId={section._id} />
      </div>
    </div>
  );
};
