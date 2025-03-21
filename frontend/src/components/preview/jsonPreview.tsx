import { useAppSelector } from "@/redux/store";

export const JsonPreview = () => {
  const activeConfig = useAppSelector((state) => state.activeConfig);
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">JSON Output</h3>
      <pre className="bg-muted p-4 rounded-md overflow-y-auto max-h-[600px] text-sm w-full">
        {JSON.stringify(activeConfig, null, 2)}
      </pre>
      <p className="text-sm text-muted-foreground mt-2">
        This JSON will be available at the API endpoint:{" "}
        <code>/api/screen?id={activeConfig.name}</code>
      </p>
    </div>
  );
};
