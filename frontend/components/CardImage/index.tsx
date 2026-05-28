import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardImageProps } from "./CardImageProps";
import Link from "next/link";
import { Button } from "../ui/button";
import { LinkIcon } from "lucide-react";

export function CardImage({ title, subtitle, imageSrc, href }: CardImageProps) {
  return (
    <Link href={href}>
      <Card className="w-[350px] bg-linear-to-br from-background to-muted border border-muted hover:border-primary">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-justify h-[65px]">
            {subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Image src={imageSrc} alt={title} width={350} height={230} />
        </CardContent>

        <CardFooter>
          <Button
            className="rounded-full"
            variant="secondary"
            size="icon"
            aria-label="link"
          >
            <LinkIcon />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
