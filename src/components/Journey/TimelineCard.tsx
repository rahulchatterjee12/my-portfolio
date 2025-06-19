import React from "react";
import { Meteors } from "./meteors";

export function TimeLineCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-screen-lg mx-auto border border-white/40 rounded-2xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-2xl bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {children}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
