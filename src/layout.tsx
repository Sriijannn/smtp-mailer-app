// src/components/layout.tsx
import React from "react";
import { MainNav } from "@/components/MainNav";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">{children}</main>
      <Toaster />
    </div>
  );
}
