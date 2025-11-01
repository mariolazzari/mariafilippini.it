"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { SidebarProvider } from "../ui/sidebar";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};
