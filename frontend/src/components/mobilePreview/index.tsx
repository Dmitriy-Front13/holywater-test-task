import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { MobilePreviewTabs } from "./mobilePreviewTabs";

export const MobilePreview = () => {
  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
        <CardDescription>
          Preview your configuration as a mobile device or JSON
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MobilePreviewTabs />
      </CardContent>
    </Card>
  );
};
