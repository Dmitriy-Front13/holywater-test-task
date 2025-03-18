import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";
import { Code, Smartphone } from "lucide-react";
import { JsonPreview } from "../jsonPreview";
export const MobilePreviewTabs = () => {
  return (
    <Tabs defaultValue="device" className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger value="device" className="flex items-center gap-2">
          <Smartphone className="h-4 w-4" />
          Устройство
        </TabsTrigger>
        <TabsTrigger value="json" className="flex items-center gap-2">
          <Code className="h-4 w-4" />
          JSON
        </TabsTrigger>
      </TabsList>
      <TabsContent value="device"></TabsContent>
      <TabsContent value="json">
        <JsonPreview />
      </TabsContent>
    </Tabs>
  );
};
