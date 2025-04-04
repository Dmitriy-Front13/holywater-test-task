import { Save } from "lucide-react";
import { Button } from "../../shared/ui";
import { useAppSelector } from "@/redux/store";
import {
  createConfiguration,
  updateConfiguration,
} from "@/services/configuration.service";
import { useState } from "react";
import { toast } from "sonner";
import { useLocation } from "react-router";

export const SaveConfigButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const config = useAppSelector((state) => state.activeConfig);
  const { pathname } = useLocation();
  const isNew = pathname === "/configurations/create";
  const saveConfig = async () => {
    try {
      setLoading(true);
      if (isNew) {
        const data = await createConfiguration(config);
        if (data) toast("Конфігурацію успішно cтворено");
      } else {
        const success = await updateConfiguration(config);
        if (success) toast("Конфігурацію успішно оновлено");
      }
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
      {isNew ? "Створити" : "Зберегти "} конфігурацію
    </Button>
  );
};
