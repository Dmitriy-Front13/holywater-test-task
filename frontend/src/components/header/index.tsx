import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IConfig } from "@/types";
import { HeaderSkeleton } from "./headerSkeleton";
interface IHeaderProps {
  activeConfig: IConfig;
  configurations: IConfig[];
  setActiveConfig: React.Dispatch<React.SetStateAction<IConfig | undefined>>;
  loading: boolean;
}
export const Header = ({
  activeConfig,
  configurations,
  setActiveConfig,
  loading,
}: IHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Панель адміністратора</h1>
      <div className="flex gap-2">
        {loading ? (
          <HeaderSkeleton />
        ) : (
          <>
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
              Create New
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
