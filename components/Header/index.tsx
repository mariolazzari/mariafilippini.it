import Link from "next/link";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { links } from "@/lib/links";
import { Drawer } from "@/components/Drawer";

export function Header() {
  return (
    <header className="h-[50px] flex items-center px-4">
      <nav className="flex justify-between items-center flex-1">
        <ThemeToggle />

        <ul className="hidden md:visible md:flex gap-2">
          {links.map(({ label, href, icon }) => (
            <li key={href}>
              <Link className="font-semibold flex gap-1" href={href}>
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>

        <Drawer />
      </nav>
    </header>
  );
}
