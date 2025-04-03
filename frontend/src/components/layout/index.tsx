import { Outlet } from "react-router";
import { AppSidebar } from "./appSidebar";
import { Header } from "./header";

export const Layout = () => {
  return (
    <AppSidebar>
      <Header />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </AppSidebar>
  );
};
