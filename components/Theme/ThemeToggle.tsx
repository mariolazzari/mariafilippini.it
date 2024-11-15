"use client";

import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const items = [
    { label: "Chiaro", theme: "light", icon: <Sun /> },
    { label: "Scuro", theme: "dark", icon: <Moon /> },
    { label: "Sistema", theme: "system", icon: <Settings /> },
  ];

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun />;

      case "dark":
        return <Moon />;

      default:
        return <Settings />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {renderIcon()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {items.map(({ label, theme, icon }) => (
          <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
            {icon} {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
