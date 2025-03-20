import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
} from "../ui";
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
          <SaveConfigButton />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="config-name">Назва конфігурації</Label>
            <EditNameInput />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
