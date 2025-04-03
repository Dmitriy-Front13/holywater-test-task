import { ISeries } from "@/types";
import { Link } from "react-router";
import { Button } from "../../shared/ui";

interface ISeriesItemProps {
  series: ISeries;
}

export const SeriesItem = ({ series }: ISeriesItemProps) => {
  return (
    <tr>
      <td className="py-3 px-4">
        <Button variant="link" className="p-0 h-auto font-medium text-primary">
          <Link to={`/configurations/${series._id}`}>{series.title}</Link>
        </Button>
      </td>
      <td className="py-3 px-4">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            series.exclusive
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {series.exclusive ? "Так" : "Ні"}
        </span>
      </td>
      <td className="py-3 px-4">
        {" "}
        {new Date(series.updatedAt).toLocaleString("ru-RU", {
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
