import { IConfig } from "@/types";
import { Card, CardContent } from "../ui";
import { ConfigurationItem } from "./configurationItem";

interface IConigurationsListProps {
  configurations: IConfig[];
}

export const ConfigurationList = ({
  configurations,
}: IConigurationsListProps) => {
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
                Основна
              </th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                Остання зміна
              </th>
            </tr>
          </thead>
          <tbody>
            {configurations.map((configuration) => (
              <ConfigurationItem
                key={configuration._id}
                configuration={configuration}
              />
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
