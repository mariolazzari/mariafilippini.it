import Link from "next/link";

export function Footer() {
  const copyright = `@ Mario Lazzari ${new Date().getFullYear()}`;

  return (
    <footer className="flex justify-center items-center">
      <Link href="https://mariolazzari.it" target="_blank">
        {copyright}
      </Link>
    </footer>
  );
}
