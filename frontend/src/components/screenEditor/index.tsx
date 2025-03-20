import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { SectionsList } from "./SectionsList";

export const ScreenEditor = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Screen Sections</CardTitle>
        <CardDescription>Drag and drop to reorder sections</CardDescription>
      </CardHeader>
      <CardContent>
        <SectionsList />
      </CardContent>
    </Card>
  );
};
