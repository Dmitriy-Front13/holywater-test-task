import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ErrorState } from "../shared/errorState";
import { LoadingState } from "../shared/loadingState";
import { OneSeriesForm } from "./oneSeriesForm";
import { ISeries } from "@/types";
import { getOneSeriesById } from "@/services/series.service";

export const OneSeriesPage = () => {
  const { id } = useParams();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [oneSeries, setOneSeries] = useState<ISeries>();

  useEffect(() => {
    const fetchOneSeries = async () => {
      try {
        const data = await getOneSeriesById(id!);
        setOneSeries(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchOneSeries();
  }, []);
  return (
    <>
      {error && <ErrorState message={error} />}
      {loading && <LoadingState message="серіалу" />}
      {!error && !loading && (
        <>
          <OneSeriesForm
            data={{
              title: oneSeries!.title,
              description: oneSeries!.description,
              exclusive: oneSeries!.exclusive,
              imageURL: oneSeries!.imageURL,
            }}
            isNew={false}
            id={id}
          />
        </>
      )}
    </>
  );
};
