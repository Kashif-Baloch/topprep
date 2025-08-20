"use client";
import api from "@/config/axios";
import React from "react";

const Home = ({ username }: { username: string }) => {
  const handleLogout = async () => {
    api
      .post("/v1/auth/admin/logout")
      .then(() => {
        window.location.href = "/admin/login";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen container mx-auto px-4 bg-gray-100 flex flex-col items-center justify-center">
      <div className="rounded-2xl bg-white shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {username} 👋</h1>
        <p className="mb-6">This is your admin dashboard.</p>
        <button
          type="button"
          className="w-full rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
