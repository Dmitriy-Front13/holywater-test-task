import { Separator, SidebarTrigger } from "../components/ui";

export const Header = () => {
  return (
    <header className="flex items-center border-b h-12">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <h1 className="text-xl font-bold">Панель адміністратора</h1>
      <div className="flex gap-2"></div>
    </header>
  );
};
