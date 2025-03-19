import { editConfigName } from "@/redux/activeConfigSlice";
import { Input } from "../ui";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export const EditNameInput = () => {
  const dispatch = useAppDispatch();
  const activeConfigName = useAppSelector((state) => state.activeConfig.name);
  return (
    <Input
      id="config-name"
      value={activeConfigName}
      onChange={(e) => dispatch(editConfigName(e.target.value))}
    />
  );
};
