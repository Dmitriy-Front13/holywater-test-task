import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/components/ui";
import { addActiveConfig } from "@/redux/activeConfigSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { IConfig } from "@/types";
interface IHeaderProps {
  configurations: IConfig[];
}
export const Header = ({ configurations }: IHeaderProps) => {
  const dispatch = useAppDispatch();
  const activeConfigId = useAppSelector((state) => state.activeConfig._id);
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Панель адміністратора</h1>
      <div className="flex gap-2">
        <Select
          value={activeConfigId}
          onValueChange={(value) => {
            const selected = configurations.find((c) => c._id === value);
            if (selected) dispatch(addActiveConfig(selected));
          }}
        >
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select configuration" />
          </SelectTrigger>
          <SelectContent>
            {configurations.map((config) => (
              <SelectItem key={config._id} value={config._id}>
                {config.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
        // onClick={createNewConfig}
        >
          Додати нову конфігурацію
        </Button>
      </div>
    </div>
  );
};
