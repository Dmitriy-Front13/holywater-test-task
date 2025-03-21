import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigurationPage } from "./pages/ConfigurationPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "./redux/store.ts";
import { Layout } from "./layout/";
import { ConfigurationsPage } from "./pages/ConfigurationsPage.tsx";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/configurations" element={<ConfigurationsPage />} />
            <Route path="/configurations/:id" element={<ConfigurationPage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </>
);
