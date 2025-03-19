import { Input, Label, Textarea } from "../ui";

export const ItemEditor = () => {
  return (
    <div className="grid gap-3 mt-3 p-3 bg-muted/20 rounded-md">
      <div className="grid gap-2">
        <Label htmlFor={`item-title-${item.id}`}>Title</Label>
        <Input
          id={`item-title-${item.id}`}
          value={item.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`item-desc-${item.id}`}>Description</Label>
        <Textarea
          id={`item-desc-${item.id}`}
          value={item.description || ""}
          onChange={(e) => onUpdate({ description: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`item-image-${item.id}`}>Image URL</Label>
        <Input
          id={`item-image-${item.id}`}
          value={item.imageUrl}
          onChange={(e) => onUpdate({ imageUrl: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`item-action-${item.id}`}>Action URL</Label>
        <Input
          id={`item-action-${item.id}`}
          value={item.actionUrl || ""}
          onChange={(e) => onUpdate({ actionUrl: e.target.value })}
        />
      </div>
    </div>
  );
};
