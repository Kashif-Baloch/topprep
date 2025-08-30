"use client";
import React from "react";

const Home = ({ username }: { username: string }) => {
  return (
    <div className="container mx-auto px-4 flex flex-col mt-20 items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome, {username} 👋</h1>
    </div>
  );
};

export default Home;
