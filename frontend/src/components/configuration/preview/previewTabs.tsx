import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shared/ui";
import { Code, Smartphone } from "lucide-react";
import { JsonPreview } from "./jsonPreview";
import { MobilePreview } from "./mobilePreview";
export const PreviewTabs = () => {
  return (
    <Tabs defaultValue="device" className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger value="device" className="flex items-center gap-2">
          <Smartphone className="h-4 w-4" />
          Мобільний застосунок
        </TabsTrigger>
        <TabsTrigger value="json" className="flex items-center gap-2">
          <Code className="h-4 w-4" />
          JSON
        </TabsTrigger>
      </TabsList>
      <TabsContent value="device" className="flex justify-center">
        <MobilePreview />
      </TabsContent>
      <TabsContent value="json">
        <JsonPreview />
      </TabsContent>
    </Tabs>
  );
};
