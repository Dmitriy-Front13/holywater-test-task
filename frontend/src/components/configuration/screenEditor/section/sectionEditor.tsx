import { ComboboxSelect, Label, Switch } from "@/components/shared/ui";
import { updateSectionField } from "@/redux/activeConfigSlice";
import { useAppDispatch } from "@/redux/store";
import { ISection, sectionTitles, sectionTypes } from "@/types";
interface ISectionEditorProps {
  section: ISection;
}
export const SectionEditor = ({ section }: ISectionEditorProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-4 mb-4 p-4 bg-muted/20 rounded-md">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`section-title-${section._id}`}>Назва секції</Label>
          <ComboboxSelect
            id={`section-title-${section._id}`}
            value={section.title}
            onValueChange={(value) =>
              dispatch(
                updateSectionField({
                  sectionId: section._id,
                  key: "title",
                  value,
                })
              )
            }
            options={[...sectionTitles]}
            placeholder="Select type"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor={`section-type-${section._id}`}>Тип секції</Label>
          <ComboboxSelect
            id={`section-type-${section._id}`}
            value={section.type}
            onValueChange={(value) =>
              dispatch(
                updateSectionField({
                  sectionId: section._id,
                  key: "type",
                  value,
                })
              )
            }
            options={[...sectionTypes]}
            placeholder="Select type"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id={`show-title-${section._id}`}
            checked={section.showTitle}
            onCheckedChange={(checked) =>
              dispatch(
                updateSectionField({
                  sectionId: section._id,
                  key: "showTitle",
                  value: checked,
                })
              )
            }
          />
          <Label htmlFor={`show-title-${section._id}`}>
            Показувати назву секції
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id={`show-items-title-${section._id}`}
            checked={section.showItemsTitle}
            onCheckedChange={(checked) =>
              dispatch(
                updateSectionField({
                  sectionId: section._id,
                  key: "showItemsTitle",
                  value: checked,
                })
              )
            }
          />
          <Label htmlFor={`show-items-title-${section._id}`}>
            Показувати назви серіалів
          </Label>
        </div>
      </div>
    </div>
  );
};
