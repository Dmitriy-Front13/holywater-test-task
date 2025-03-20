import { useEffect, useState } from "react";
import { getConfigurationById } from "../services/configuration.service";
import { ErrorState } from "../components/errorState";
import { ConfigurationSetting } from "../components/configurationSetting";
import { LoadingState } from "../components/loadingState";
import { useAppDispatch } from "../redux/store";
import { addActiveConfig } from "../redux/activeConfigSlice";
import { ScreenEditor } from "../components/screenEditor";
import { Preview } from "../components/preview";
import { useParams } from "react-router";

function App() {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    const fetchConfigurations = async () => {
      try {
        const data = await getConfigurationById(id!);
        dispatch(addActiveConfig(data));
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchConfigurations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && <ErrorState message={error} />}
      {loading && <LoadingState />}
      {!error && !loading && (
        <>
          <div className="space-y-4">
            <ConfigurationSetting />
            <div className="grid grid-cols-[1fr_600px] gap-6">
              <ScreenEditor />
              <Preview />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
