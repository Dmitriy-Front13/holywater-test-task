import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/components/ui";
import { IConfig } from "@/types";
interface IHeaderProps {
  activeConfig: IConfig;
  configurations: IConfig[];
  setActiveConfig: React.Dispatch<React.SetStateAction<IConfig | undefined>>;
}
export const Header = ({
  activeConfig,
  configurations,
  setActiveConfig,
}: IHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Панель адміністратора</h1>
      <div className="flex gap-2">
        <Select
          value={activeConfig._id}
          onValueChange={(value) => {
            const selected = configurations.find((c) => c._id === value);
            if (selected) setActiveConfig(selected);
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
