import { ISection } from "@/types";
import { DragHandleItem } from "./dragHandleItem";
import { useCustomSortable } from "@/hooks/useCustomSortable";

interface IItemComponentProps {
  item: ISection["items"][0];
}

export const ItemComponent = ({ item }: IItemComponentProps) => {
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
        {/* <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onToggleEdit}>
            {isEditing ? "Done" : "Edit"}
          </Button>
          <Button variant="destructive" size="sm" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
      {/* {isEditing && <ItemEditor item={item} onUpdate={onUpdate} />} */}
    </div>
  );
};
