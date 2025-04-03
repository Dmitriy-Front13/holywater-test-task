import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Switch, Label } from "../../shared/ui";
import { editConfigIsMain } from "@/redux/activeConfigSlice";

export const EditIsMainSwitch = () => {
  const isMain = useAppSelector((state) => state.activeConfig.isMain);
  const dispatch = useAppDispatch();
  const setIsMain = (checked: boolean) => {
    dispatch(editConfigIsMain(checked));
  };
  return (
    <div className="flex items-center gap-2 border-t pt-3">
      <Label htmlFor="isMain">Використовувати як основну</Label>
      <Switch id="isMain" checked={isMain} onCheckedChange={setIsMain} />
    </div>
  );
};
