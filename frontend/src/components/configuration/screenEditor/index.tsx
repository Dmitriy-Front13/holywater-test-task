import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shared/ui";
import { SectionsList } from "./section/sectionsList";

export const ScreenEditor = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Конфігурація секцій</CardTitle>
        <CardDescription>
          Перетягніть і відпустіть елементи, щоб змінити порядок порядок блоків.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SectionsList />
      </CardContent>
    </Card>
  );
};
