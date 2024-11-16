import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardImageProps } from "./CardImageProps";

export function CardImage({ title, subtitle, imageSrc }: CardImageProps) {
  return (
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
    </Card>
  );
}
