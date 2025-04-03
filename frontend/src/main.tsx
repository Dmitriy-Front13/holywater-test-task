import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigurationPage } from "./components/configuration";
import { Toaster } from "./components/shared/ui/sonner.tsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "./redux/store.ts";
import { Layout } from "./components/layout/index.tsx";
import { ConfigurationsPage } from "./components/configurations";
import HomePage from "./components/home";
import { SeriesPage } from "./components/series/index.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/configurations" element={<ConfigurationsPage />} />
            <Route path="/configurations/:id" element={<ConfigurationPage />} />
            <Route path="/series" element={<SeriesPage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </>
);
