import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { title, subTitle } from "@/lib/texts";
import { links } from "@/lib/links";
import Logo from "@/public/images/logo.jpg";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu aria-label="Menu" />
      </SheetTrigger>

      <SheetContent className="w-[275px] bg-linear-to-br from-background to-muted border border-muted">
        <SheetHeader>
          <div>
            <Image
              className="rounded-full h-24 w-24 my-8 mx-auto"
              src={Logo}
              alt={title}
              priority
            />
          </div>

          <SheetTitle className="text-center font-semibold">{title}</SheetTitle>
          <SheetDescription className="text-center">
            {subTitle}
          </SheetDescription>
        </SheetHeader>

        <ul className="mt-4">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link href={href}>
                <SheetClose className="flex items-center gap-4 p-2 hover:font-semibold">
                  {icon} {label}
                </SheetClose>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
