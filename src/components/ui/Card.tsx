import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <article className={cn("gms-card", className)} {...props}>
      {children}
    </article>
  );
}
