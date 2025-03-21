import { useEffect, useState } from "react";
import {
  createConfiguration,
  getConfigurationById,
} from "../services/configuration.service";
import { ErrorState } from "../components/errorState";
import { ConfigurationSetting } from "../components/configurationSetting";
import { LoadingState } from "../components/loadingState";
import { useAppDispatch } from "../redux/store";
import { addActiveConfig } from "../redux/activeConfigSlice";
import { ScreenEditor } from "../components/screenEditor";
import { Preview } from "../components/preview";
import { useLocation, useParams } from "react-router";
import { IConfig } from "@/types";

export const ConfigurationPage = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const fetchConfiguration = async () => {
      let data: IConfig;
      try {
        if (pathname === "/configurations/create") {
          data = await createConfiguration();
          window.history.pushState(null, "", `/configurations/${data._id}`);
        } else {
          console.log(id);
          data = await getConfigurationById(id!);
        }
        dispatch(addActiveConfig(data));
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
      {loading && <LoadingState />}
      {!error && !loading && (
        <div className="space-y-4">
          <ConfigurationSetting />
          <div className="grid grid-cols-[1fr_600px] gap-6">
            <ScreenEditor />
            <Preview />
          </div>
        </div>
      )}
    </>
  );
};
