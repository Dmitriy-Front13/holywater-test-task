import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { IConfig } from "./types";
import { getAllConfigurations } from "./services/configuration.service";
import { ErrorState } from "./components/errorState";
import { ConfigurationSetting } from "./components/configurationSetting";
import { LoadingState } from "./components/loadingState";
import { useAppDispatch } from "./redux/store";
import { addActiveConfig } from "./redux/activeConfigSlice";
import { ScreenEditor } from "./components/screenEditor";
import { MobilePreview } from "./components/mobilePreview";

function App() {
  const [configurations, setConfigurations] = useState<IConfig[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const fetchConfigurations = async () => {
    try {
      const data = await getAllConfigurations();
      setConfigurations(data);
      dispatch(addActiveConfig(data[0]));
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
      {error && <ErrorState message={error} />}
      {loading && <LoadingState />}
      {!error && !loading && (
        <>
          <Header configurations={configurations!} />
          <div className="space-y-4">
            <ConfigurationSetting />
            <div className="grid grid-cols-[1fr_600px] gap-6">
              <ScreenEditor />
              <MobilePreview />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
