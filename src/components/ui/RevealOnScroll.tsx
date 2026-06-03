"use client";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  return <div className={className}>{children}</div>;
}
