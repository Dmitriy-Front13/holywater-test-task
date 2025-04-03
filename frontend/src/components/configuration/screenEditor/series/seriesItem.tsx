import { ISection } from "@/types";
import { DragHandleItem } from "../dndHelpers/dragHandleItem";
import { useCustomSortable } from "@/components/configuration/screenEditor/dndHelpers/useCustomSortable";

interface IItemComponentProps {
  item: ISection["items"][0];
}

export const SeriesItem = ({ item }: IItemComponentProps) => {
  const { attributes, listeners, setNodeRef, style } = useCustomSortable(
    item._id
  );
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border rounded p-3 bg-background"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DragHandleItem attributes={attributes} listeners={listeners} />
          <div className="flex flex-col">
            <span className="font-medium">{item.title}</span>
            {item.description && (
              <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                {item.description}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
