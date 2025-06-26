"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://personal-website-server-chi.vercel.app/api/v1/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
    if (data.success) {
      alert("Registration successful! Please login.");
      router.push("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 p-6">
      <input
        name="name"
        placeholder="Name"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
