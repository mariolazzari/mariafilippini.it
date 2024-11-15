import Link from "next/link";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Biografia", href: "/bio" },
    { label: "Opere", href: "/works" },
    { label: "Eventi", href: "/events" },
    { label: "Contatti", href: "/contacts" },
  ];

  return (
    <header className="h-[50px] flex items-center">
      <nav className="flex justify-between flex-1 px-4">
        <Avatar>
          <AvatarImage src="/logo.jpg" />
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>

        <ul className="flex gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link className="font-semibold" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
