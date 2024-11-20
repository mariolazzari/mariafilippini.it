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

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu aria-label="Menu" />
      </SheetTrigger>

      <SheetContent className="w-[275px] bg-gradient-to-br from-background to-muted border border-muted">
        <SheetHeader>
          <Image
            className="rounded-full my-8 mx-auto"
            src="/images/logo.jpg"
            alt={title}
            width={96}
            height={96}
          />

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
