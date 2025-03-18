import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui";
import { EditorContent } from "./editorContent";

export const ScreenEditor = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Screen Sections</CardTitle>
            <CardDescription>Drag and drop to reorder sections</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
            // onClick={addSection}
            >
              Add Section
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <EditorContent />
      </CardContent>
    </Card>
  );
};
