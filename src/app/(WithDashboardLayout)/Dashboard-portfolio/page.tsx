/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // যদি user না থাকে, fallback client redirect
    }
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
      <p>User: {user?.email}</p>
    </div>
  );
};

export default DashboardPage;
