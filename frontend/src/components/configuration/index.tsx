import { useEffect, useState } from "react";

import { useLocation, useParams } from "react-router";
import { IConfig } from "@/types";
import {
  createConfiguration,
  getConfigurationById,
} from "@/services/configuration.service";
import { useAppDispatch } from "@/redux/store";
import { addActiveConfig } from "@/redux/activeConfigSlice";
import { ErrorState } from "../shared/errorState";
import { LoadingState } from "../shared/loadingState";
import { ConfigurationSetting } from "./configurationSetting";
import { ScreenEditor } from "./screenEditor";
import { Preview } from "./preview";

export const ConfigurationPage = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchConfiguration = async () => {
      let data: IConfig;
      try {
        if (pathname === "/configurations/create") {
          data = await createConfiguration();
          window.history.pushState(null, "", `/configurations/${data._id}`);
        } else {
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
      {loading && <LoadingState message="конфігурації" />}
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
