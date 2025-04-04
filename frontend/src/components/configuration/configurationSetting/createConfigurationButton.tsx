import { Save } from "lucide-react";
import { Button } from "../../shared/ui";
import { useAppSelector } from "@/redux/store";
import { createConfiguration } from "@/services/configuration.service";
import { useState } from "react";
import { toast } from "sonner";

export const CreateConfigurationButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const config = useAppSelector((state) => state.activeConfig);

  const saveConfig = async () => {
    try {
      setLoading(true);
      const data = await createConfiguration(config);
      if (data) toast("Конфігурацію успішно cтворено");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      onClick={saveConfig}
      disabled={loading}
      className="flex items-center gap-2"
    >
      <Save className="h-4 w-4" />
      {loading ? "Збереження..." : " Зберегти конфігурацію"}
    </Button>
  );
};
