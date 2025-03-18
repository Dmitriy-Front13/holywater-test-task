import "@testing-library/jest-dom";
import { RenderWithProvider } from "@/helpers/renderWithProvider";
import { EditNameInput } from "./editNameInput";
import { fireEvent } from "@testing-library/react";

describe("EditNameInput test", () => {
  it("изменяет значение при вводе текста", () => {
    const { getByRole } = RenderWithProvider(<EditNameInput />);

    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: "New Config Name" } });

    expect(input).toHaveValue("New Config Name");
  });
});
