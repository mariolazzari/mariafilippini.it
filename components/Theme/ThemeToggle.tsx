"use client";

import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
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
        return <Sun size={28} />;

      case "dark":
        return <Moon size={28} />;

      default:
        return <Settings size={28} />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{renderIcon()}</DropdownMenuTrigger>

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
