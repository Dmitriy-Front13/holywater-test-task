import "@testing-library/jest-dom";
import { RenderWithProvider } from "@/helpers/renderWithProvider";
import { EditNameInput } from "./editNameInput";
import { fireEvent, waitFor } from "@testing-library/react";
import { store } from "@/redux/store";

describe("EditNameInput test", () => {
  it("update value in redux on change input", async () => {
    const { getByRole } = RenderWithProvider(<EditNameInput />);

    const input = getByRole("textbox");
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "New Config Name" } });
    await waitFor(() => {
      expect(store.getState().activeConfig.name).toBe("New Config Name");
    });
  });
});
