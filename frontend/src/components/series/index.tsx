import { ErrorState } from "@/components/shared/errorState";
import { LoadingState } from "@/components/shared/loadingState";
import { Button } from "@/components/shared/ui";
import { getAllSeries } from "@/services/series.service";
import { ISeries } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { SeriesList } from "./seriesList";

export const SeriesPage = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [series, setSeries] = useState<ISeries[]>();
  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const data = await getAllSeries();
        setSeries(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchConfiguration();
  }, []);
  return (
    <>
      {error && <ErrorState message={error} />}
      {loading && <LoadingState message="серіалів" />}
      {!error && !loading && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Всі серіали</h1>
            <Button asChild>
              <Link to="/series/create">Додати новий серіал</Link>
            </Button>
          </div>
          <SeriesList series={series!} />
        </>
      )}
    </>
  );
};
