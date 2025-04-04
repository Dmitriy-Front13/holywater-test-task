import { useAppDispatch } from "@/redux/store";
import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shared/ui";
import { SectionsList } from "./section/sectionsList";
import { addNewSection } from "@/redux/activeConfigSlice";

export const ScreenEditor = () => {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Конфігурація секцій</CardTitle>
        <CardDescription>
          Перетягніть і відпустіть елементи, щоб змінити порядок порядок блоків.
        </CardDescription>
        <CardAction className="self-center">
          <Button
            onClick={() => {
              dispatch(addNewSection());
            }}
          >
            Додати нову секцію
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <SectionsList />
      </CardContent>
    </Card>
  );
};
