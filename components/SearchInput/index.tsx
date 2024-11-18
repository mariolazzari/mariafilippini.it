"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      return router.push("/works/acts?search=" + value);
    }
    router.push("/works/acts");
  };

  const onResetClick = () => {
    setSearch("");
    router.push("/works/acts");
  };

  const onSearchCick: MouseEventHandler<HTMLButtonElement> = () => {
    router.push("/works/acts?search=" + search);
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
      <Button className="w-24" onClick={onSearchCick}>
        Cerca
      </Button>
    </div>
  );
}
