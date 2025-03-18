import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

export const RenderWithProvider = (component: React.ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};
