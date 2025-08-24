import React from "react";
import { MovingBorderDemo } from "@/components/ui/demo";

export function App() {
  return (
    <main className="min-h-dvh grid place-items-center">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold">Moving Border Button</h1>
        <MovingBorderDemo />
      </div>
    </main>
  );
}

