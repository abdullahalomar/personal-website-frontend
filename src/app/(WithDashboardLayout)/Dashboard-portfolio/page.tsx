"use client";

import LogoutButton from "@/components/LogoutButton/LogoutButton";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
