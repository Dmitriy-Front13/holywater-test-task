import { useCustomSortable } from "@/components/configuration/screenEditor/dndHelpers/useCustomSortable";
import { DragHandleItem } from "../dndHelpers/dragHandleItem";
import { ISection } from "@/types";
import { SeriesList } from "../series/seriesList";
import { Button } from "@/components/shared/ui";
import { Trash2 } from "lucide-react";
import { useAppDispatch } from "@/redux/store";
import { removeSectionById } from "@/redux/activeConfigSlice";
interface ISectionItemProps {
  section: ISection;
}
export const SectionItem = ({ section }: ISectionItemProps) => {
  const { attributes, listeners, setNodeRef, style } = useCustomSortable(
    section._id
  );
  const dispatch = useAppDispatch();

  return (
    <div ref={setNodeRef} style={style} className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <DragHandleItem attributes={attributes} listeners={listeners} />
          <h3 className="text-lg font-medium">{section.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Редагувати</Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => dispatch(removeSectionById(section._id))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <SeriesList items={section.items} sectionId={section._id} />
      </div>
    </div>
  );
};
