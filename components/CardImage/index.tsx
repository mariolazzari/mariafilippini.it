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
import { Book } from "lucide-react";

export function CardImage({ title, subtitle, imageSrc }: CardImageProps) {
  return (
    <Link href="/works">
      <Card className="w-[350px]">
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
          <Button variant="secondary">
            <Book /> Opere
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
