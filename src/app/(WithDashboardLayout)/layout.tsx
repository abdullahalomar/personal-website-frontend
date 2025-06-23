import SidebarDrawer from "@/components/SidebarDrawer/SidebarDrawer";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <SidebarDrawer>{children}</SidebarDrawer>
    </>
  );
};

export default DashboardLayout;
