"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchInputProps } from "./SearchInputProps";

export function SearchInput({ href }: SearchInputProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      return router.push(`/works/acts?search=${search}`);
    }
    router.push(href);
  };

  const onResetClick = () => {
    setSearch("");
    router.push(href);
  };

  const onSearchCick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push(`/works/acts?search=${search}`);
  };

  return (
    <div className="max-w-xl flex justify-center flex-wrap gap-4">
      <Input
        className="border border-primary"
        value={search}
        onChange={onSearchChange}
        autoFocus
      />
      <Button className="w-24" variant="secondary" onClick={onResetClick}>
        Tutti
      </Button>
      <Button className="w-24" disabled={search === ""} onClick={onSearchCick}>
        Cerca
      </Button>
    </div>
  );
}
