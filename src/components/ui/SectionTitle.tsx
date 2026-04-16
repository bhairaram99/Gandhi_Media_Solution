import { cn } from "@/lib/helpers";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow ? <p className="gms-section-eyebrow">{eyebrow}</p> : null}
      <h2 className="gms-section-title">{title}</h2>
    </div>
  );
}
