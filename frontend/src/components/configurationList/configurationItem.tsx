import { IConfig } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui";

interface IConfigurationItemProps {
  configuration: IConfig;
}
export const ConfigurationItem = ({
  configuration,
}: IConfigurationItemProps) => {
  const getStatusBadge = (isMain: boolean) => {
    if (isMain)
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Так
        </span>
      );

    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        Ні
      </span>
    );
  };
  return (
    <tr>
      <td className="py-3 px-4">
        <Button variant="link" className="p-0 h-auto font-medium text-primary">
          <Link to={`/configurations/${configuration._id}`}>
            {configuration.name}
          </Link>
        </Button>
      </td>
      <td className="py-3 px-4">{getStatusBadge(configuration.isMain)}</td>
      <td className="py-3 px-4">
        {" "}
        {new Date(configuration.updatedAt).toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>
    </tr>
  );
};
