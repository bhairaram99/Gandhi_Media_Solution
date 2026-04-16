import type { PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn("gms-container", className)}>{children}</div>;
}
