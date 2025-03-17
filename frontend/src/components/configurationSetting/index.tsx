import { Save } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "../ui";
import { IConfig } from "@/types";

interface ConfigurationSettingProps {
  activeConfig: IConfig;
  setActiveConfig: React.Dispatch<React.SetStateAction<IConfig | undefined>>;
}
export const ConfigurationSetting = ({
  activeConfig,
  setActiveConfig,
}: ConfigurationSettingProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Налаштування конфігурації</CardTitle>
            <CardDescription>
              Змініть основні налаштування для цієї конфігурації
            </CardDescription>
          </div>
          <Button
            // onClick={saveConfig}
            className="flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Зберегти налаштування
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="config-name">Назва конфігурації</Label>
            <Input
              id="config-name"
              value={activeConfig.name}
              onChange={(e) =>
                setActiveConfig({ ...activeConfig, name: e.target.value })
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
