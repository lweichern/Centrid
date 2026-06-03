"use client";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  return (
    <span className={className}>
      {target.toLocaleString()}
      {suffix}
    </span>
  );
}
