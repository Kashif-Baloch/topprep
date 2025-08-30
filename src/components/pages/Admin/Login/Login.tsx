"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/config/axios";

export default function LoginSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await api.post("/v1/auth/admin/login", {
        username,
        password,
      });
      if (res.status === 200) router.push("/admin/dashboard");
      else setError("Login failed");
    } catch (error) {
      console.log(error);
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen  items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl bg-white py-16 p-6 shadow-lg"
      >
        <h1 className="mb-5 text-center text-3xl font-bold text-emerald-500">
          Admin Login
        </h1>
        {error && (
          <div className="my-4 border flex items-center justify-center text-sm rounded bg-red-50/75 border-red-600 text-red-600 p-2">
            {error}
          </div>
        )}
        <div className="mb-6">
          <label className="block text-sm font-medium">Username</label>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring focus:ring-emerald-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl w-full transition-all duration-300"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
