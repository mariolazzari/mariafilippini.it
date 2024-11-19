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
        <Menu />
      </SheetTrigger>

      <SheetContent className="w-[300px]">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{subTitle}</SheetDescription>
        </SheetHeader>

        <ul className="mt-4">
          {links.map(({ href, label, icon }) => (
            <li key={href}>
              <Link href={href}>
                <SheetClose className="flex items-center gap-2 p-2">
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
