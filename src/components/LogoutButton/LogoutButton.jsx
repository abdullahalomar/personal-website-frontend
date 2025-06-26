"use client";

import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="bg-red-500 px-4 py-2 text-white">
      Logout
    </button>
  );
};

export default LogoutButton;
