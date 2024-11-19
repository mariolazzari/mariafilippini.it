"use client";

import { WorkProps } from "./WorkProps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Work({ work }: WorkProps) {
  const {
    title,
    titleDia,
    plot,
    genre,
    duration,
    actors,
    scene,
    subject,
    meaning,
    remarks,
  } = work;

  return (
    <div className="w-[400px] h-[450px] p-4 border border-primary rounded-xl bg-muted">
      <div className="h-[50px]">
        <h2 className="font-semibold text-center">{title}</h2>
        <h3 className="text-xs text-center">{titleDia}</h3>
      </div>

      <Tabs className="my-4 w-full" defaultValue="1">
        <TabsList className="w-full">
          <TabsTrigger value="1">Sinossi</TabsTrigger>
          <TabsTrigger value="2">Attori</TabsTrigger>
          <TabsTrigger value="3">Tematiche</TabsTrigger>
        </TabsList>

        <TabsContent className="max-h-[280px] overflow-y-auto" value="1">
          <p className="text-justify">{plot}</p>
        </TabsContent>

        <TabsContent value="2">
          <ul className="space-y-2">
            <li>{genre}</li>
            <li>{duration}</li>
            <li>{actors}</li>
            <li>{scene}</li>
          </ul>
        </TabsContent>

        <TabsContent value="3">
          <ul className="space-y-4">
            <li>{subject}</li>
            <li>{meaning}</li>
            <li>{remarks}</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
