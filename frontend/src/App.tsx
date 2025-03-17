import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { IConfig } from "./types";
import { getAllConfigurations } from "./services/configuration.service";
import { ErrorState } from "./components/errorState";

function App() {
  const [configurations, setConfigurations] = useState<IConfig[]>();
  const [activeConfig, setActiveConfig] = useState<IConfig>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const fetchConfigurations = async () => {
    try {
      const data = await getAllConfigurations();
      setConfigurations(data);
      setActiveConfig(data[0]);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchConfigurations();
  }, []);

  return (
    <div className="container mx-auto p-6">
      {error ? (
        <ErrorState message={error} />
      ) : (
        <Header
          configurations={configurations!}
          activeConfig={activeConfig!}
          setActiveConfig={setActiveConfig}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;
