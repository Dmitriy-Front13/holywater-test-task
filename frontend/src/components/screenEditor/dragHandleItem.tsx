import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { MoveDown, MoveUp } from "lucide-react";

interface IDragHandleItemProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
}
export const DragHandleItem = ({
  attributes,
  listeners,
}: IDragHandleItemProps) => {
  return (
    <div {...attributes} {...listeners} className="cursor-move p-2">
      <MoveUp className="h-5 w-5" />
      <MoveDown className="h-5 w-5" />
    </div>
  );
};
