import { fireEvent, waitFor } from "@testing-library/react";
import { RenderWithProvider } from "@/helpers/renderWithProvider";

import { EditIsMainSwitch } from "./editIsMainSwitch";
import { store } from "@/redux/store";

it("updates isMain in redux on switch toggle", async () => {
  const { getByLabelText } = RenderWithProvider(<EditIsMainSwitch />);

  const checkbox = getByLabelText("Використовувати як основну");

  fireEvent.click(checkbox);

  await waitFor(() => {
    expect(store.getState().activeConfig.isMain).toBe(true);
  });

  fireEvent.click(checkbox);

  await waitFor(() => {
    expect(store.getState().activeConfig.isMain).toBe(false);
  });
});
