import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        className
      )}
      data-slot="card"
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      data-slot="card-header"
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("font-semibold leading-none tracking-tight", className)}
      data-slot="card-title"
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      data-slot="card-description"
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      data-slot="card-content"
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      data-slot="card-footer"
      {...props}
    />
  );
}
