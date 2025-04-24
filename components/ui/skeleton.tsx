import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type SkeletonProps = ComponentProps<"div">;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
