import { ISeries } from "@/types";
import { Card, CardContent } from "../../shared/ui";
import { SeriesItem } from "./SeriesItem";

interface ISeriesListProps {
  series: ISeries[];
}

export const SeriesList = ({ series }: ISeriesListProps) => {
  return (
    <Card>
      <CardContent className="w-full">
        <table className="w-full">
          <thead className="bg-muted/50 rounded-lg">
            <tr className="outline-none">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                Назва
              </th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                Ексклюзив
              </th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                Остання зміна
              </th>
            </tr>
          </thead>
          <tbody>
            {series.map((series) => (
              <SeriesItem key={series._id} series={series} />
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
