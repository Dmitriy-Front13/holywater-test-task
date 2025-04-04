import {
  Button,
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/ui";
import { editSectionItems } from "@/redux/activeConfigSlice";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import { IItemListProps } from "../series/seriesList";
import { ISeries } from "@/types";

interface IAvailableSeriesListProps extends IItemListProps {
  availableSeries: ISeries[];
}
export const AvailableSeriesList = ({
  items,
  sectionId,
  availableSeries,
}: IAvailableSeriesListProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[200px]"
        >
          Додати серіал
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[200px]" side="bottom">
        <Command>
          <CommandInput placeholder="Пошук серіалу..." />
          <CommandList className="max-h-60 ">
            {availableSeries.length > 0 ? (
              availableSeries.map((s) => (
                <CommandItem
                  key={s._id}
                  onSelect={() => {
                    const newItems = [...items, s];
                    dispatch(editSectionItems({ sectionId, items: newItems }));
                    setOpen(false);
                  }}
                >
                  {s.title}
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>Немає доступних</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
