import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Cog, Film } from "lucide-react";
import { Link } from "react-router";

export const AppSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <Link to="/" className="flex items-center gap-2">
            <img src="/icon.avif" alt="icon" className="w-6 aspect-square" />
            <p className="font-semibold text-xl">My Drama CMS</p>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu className="pt-2">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/configurations">
                  <Cog className="h-4 w-4" />
                  Конфігурації
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <span>
                  <Film className="h-4 w-4" />
                  Серіали
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};
