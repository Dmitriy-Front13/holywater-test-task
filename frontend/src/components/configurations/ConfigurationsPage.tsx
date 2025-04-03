import { ConfigurationList } from "@/components/configurations/configurationList";
import { ErrorState } from "@/components/shared/errorState";
import { LoadingState } from "@/components/shared/loadingState";
import { Button } from "@/components/shared/ui";
import { getAllConfigurations } from "@/services/configuration.service";
import { IConfig } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const ConfigurationsPage = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [configurations, setConfigurations] = useState<IConfig[]>();
  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        const data = await getAllConfigurations();
        setConfigurations(data);
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
      {loading && <LoadingState message="конфігурацій" />}
      {!error && !loading && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Всі конфігурації</h1>
            <Button>
              <Link to="/configurations/create">Додати конфігурацію</Link>
            </Button>
          </div>
          <ConfigurationList configurations={configurations!} />
        </>
      )}
    </>
  );
};
