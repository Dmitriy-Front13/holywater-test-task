import { Trash2 } from "lucide-react";
import { Button, ReusableAlertDialog } from "../ui";
import { useAppSelector } from "@/redux/store";
import { deleteConfiguration } from "@/services/configuration.service";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export const DeleteCOnfigurationBUtton = () => {
  const configurationId = useAppSelector((state) => state.activeConfig._id);
  const navigate = useNavigate();
  const handleDeleteConfiguration = async () => {
    try {
      const success = await deleteConfiguration(configurationId);
      if (success) {
        toast("Конфігурацію успішно видалено");
        navigate("/configurations");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <ReusableAlertDialog
      actionFn={handleDeleteConfiguration}
      title="Ви впевнені, що хочете видалити конфігурацію?"
    >
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" />
        Видалити конфігурацію
      </Button>
    </ReusableAlertDialog>
  );
};
