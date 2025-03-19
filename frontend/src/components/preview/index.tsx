import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import { PreviewTabs } from "./previewTabs";

export const Preview = () => {
  return (
    <Card className="sticky top-px h-fit gap-3">
      <CardHeader>
        <CardTitle>Попередній вигляд</CardTitle>
      </CardHeader>
      <CardContent>
        <PreviewTabs />
      </CardContent>
    </Card>
  );
};
