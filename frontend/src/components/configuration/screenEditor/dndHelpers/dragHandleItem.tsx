import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { GripVertical } from "lucide-react";

interface IDragHandleItemProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}
export const DragHandleItem = ({
  attributes,
  listeners,
}: IDragHandleItemProps) => {
  return (
    <div {...attributes} {...listeners} className="cursor-move p-1 touch-none">
      <GripVertical className="h-4 w-4 text-muted-foreground" />
    </div>
  );
};
