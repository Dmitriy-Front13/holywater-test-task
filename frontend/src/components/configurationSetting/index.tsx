import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
} from "../ui";
import { DeleteCOnfigurationBUtton } from "./deleteConfigurationButton";
import { EditIsMainSwitch } from "./editIsMainSwitch";
import { EditNameInput } from "./editNameInput";
import { SaveConfigButton } from "./saveConfigButton";

export const ConfigurationSetting = () => {
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
          <div className="flex gap-2">
            <SaveConfigButton />
            <DeleteCOnfigurationBUtton />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="config-name">Назва конфігурації</Label>
            <EditNameInput />
          </div>
          <EditIsMainSwitch />
        </div>
      </CardContent>
    </Card>
  );
};
