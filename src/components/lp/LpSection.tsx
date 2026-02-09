import { type ReactNode } from "react";

interface LpSectionProps {
  children: ReactNode;
  /** 背景: default | navy | light | white */
  variant?: "default" | "navy" | "light" | "white";
  className?: string;
  /** セクション用のHTML id（アンカー用） */
  id?: string;
}

const variantClasses = {
  default: "bg-background",
  navy: "bg-zephyros-navy text-white",
  light: "bg-zephyros-navy-light/10",
  white: "bg-white text-foreground",
};

export function LpSection({
  children,
  variant = "default",
  className = "",
  id,
}: LpSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-6 md:px-8 ${variantClasses[variant]} ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
