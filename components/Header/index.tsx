import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { links } from "@/lib/links";

export function Header() {
  return (
    <header className="h-[50px]">
      <nav className="flex justify-between items-center flex-1 px-4">
        <Image
          className="rounded-full"
          src="/images/logo.jpg"
          alt="logo"
          width={28}
          height={28}
          priority
        />

        <ul className="hidden md:flex gap-2">
          {links.map(({ label, href, icon }) => (
            <li key={href}>
              <Link className="font-semibold flex gap-1" href={href}>
                {icon} {label}
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
