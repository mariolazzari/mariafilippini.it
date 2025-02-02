import Link from "next/link";
import Image from "next/image";
import { ContactProps } from "./ContactProps";
import { Mail, LinkIcon } from "lucide-react";

export function Contact({
  title,
  description,
  url,
  imageSrc,
  mail,
}: ContactProps) {
  return (
    <div className="w-[350px] h-[400px] p-4 border border-muted hover:border-primary rounded-xl bg-linear-to-br from-background to-muted">
      <Image
        className="rounded-full mx-auto mb- shadow-md"
        src={imageSrc}
        alt={title}
        width={192}
        height={192}
      />
      <h2 className="text-center font-bold text-2xl">{title}</h2>
      <h3 className="text-center text-lg mb-12">{description}</h3>

      <Link
        className="flex items-center gap-4 mb-1 hover:font-semibold"
        href={`mailto://${mail}`}
        target="_blank"
      >
        <Mail size={20} /> {mail}
      </Link>

      <Link
        className="flex items-center gap-4 hover:font-semibold"
        href={url}
        target="_blank"
      >
        <LinkIcon size={20} /> {url}
      </Link>
    </div>
  );
}
