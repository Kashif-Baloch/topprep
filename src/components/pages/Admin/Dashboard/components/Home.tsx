"use client";
import React from "react";

const Home = ({ username }: { username: string }) => {
  return (
    <div className="min-h-screen container mx-auto px-4 bg-gray-100 flex flex-col items-center justify-center">
      <div className="rounded-2xl bg-white shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {username} 👋</h1>
        <p className="mb-6">This is your admin dashboard.</p>
      </div>
    </div>
  );
};

export default Home;
