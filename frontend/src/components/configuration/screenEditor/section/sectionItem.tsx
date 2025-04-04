import { useCustomSortable } from "@/components/configuration/screenEditor/dndHelpers/useCustomSortable";
import { DragHandleItem } from "../dndHelpers/dragHandleItem";
import { ISection } from "@/types";
import { SeriesList } from "../series/seriesList";
import { Button } from "@/components/shared/ui";
import { Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { removeSectionById } from "@/redux/activeConfigSlice";
import { useState } from "react";
import { SectionEditor } from "./sectionEditor";
import { AvailableSeriesList } from "./availableSerieslist";

interface ISectionItemProps {
  section: ISection;
}

export const SectionItem = ({ section }: ISectionItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { attributes, listeners, setNodeRef, style } = useCustomSortable(
    section._id
  );
  const allSeries = useAppSelector((state) => state.series.series);
  const dispatch = useAppDispatch();

  const availableSeries = allSeries.filter(
    (s) => !section.items.some((i) => i._id === s._id)
  );

  return (
    <div ref={setNodeRef} style={style} className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <DragHandleItem attributes={attributes} listeners={listeners} />
          <h3 className="text-lg font-medium">{section.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? "Приховати" : "Редагувати"}
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => dispatch(removeSectionById(section._id))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isEditing && <SectionEditor section={section} />}
      <div className="mt-2">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-medium">Серіали</h4>
          <AvailableSeriesList
            items={section.items}
            availableSeries={availableSeries}
            sectionId={section._id}
          />
        </div>
        <SeriesList items={section.items} sectionId={section._id} />
      </div>
    </div>
  );
};
