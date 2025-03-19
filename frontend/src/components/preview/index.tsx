import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { PreviewTabs } from "./previewTabs";

export const Preview = () => {
  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
        <CardDescription>
          Preview your configuration as a mobile device or JSON
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PreviewTabs />
      </CardContent>
    </Card>
  );
};
