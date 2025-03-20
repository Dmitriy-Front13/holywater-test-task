import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "./redux/store.ts";
import { AppSidebar } from "./layout/appSidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppSidebar />}>
            <Route index element={<App />} />
            <Route path="/configurations" element={<App />} />
            <Route path="/configurations/:id" element={<App />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </>
);
