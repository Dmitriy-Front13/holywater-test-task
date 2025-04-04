import { useAppDispatch } from "@/redux/store";
import { addNewActiveConfig } from "@/redux/activeConfigSlice";

import { ConfigurationSetting } from "./configurationSetting";
import { ScreenEditor } from "./screenEditor";
import { Preview } from "./preview";

export const CreateConfigurationPage = () => {
  const dispatch = useAppDispatch();

  dispatch(addNewActiveConfig());

  return (
    <div className="space-y-4">
      <ConfigurationSetting isNewConfig/>
      <div className="grid grid-cols-[1fr_600px] gap-6">
        <ScreenEditor />
        <Preview />
      </div>
    </div>
  );
};
