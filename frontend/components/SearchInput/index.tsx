"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchInputProps } from "./SearchInputProps";
import { Search, ArrowLeft } from "lucide-react";

export function SearchInput({ href }: SearchInputProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      return router.push(`${href}?search=${value}`);
    }
    router.push(href);
  };

  const onBackClick = () => {
    router.push("/works");
  };

  const onSearchCick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`${href}?search=${search}`);
  };

  return (
    <div className="w-[300px] flex flex-col items-center gap-4">
      <Input
        className="border border-primary"
        value={search}
        onChange={onSearchChange}
        autoFocus
      />

      <div className="flex justify-center gap-4">
        <Button className="w-24" variant="secondary" onClick={onBackClick}>
          <ArrowLeft />
          Opere
        </Button>

        <Button
          className="w-24"
          disabled={search === ""}
          onClick={onSearchCick}
        >
          <Search />
          Cerca
        </Button>
      </div>
    </div>
  );
}
