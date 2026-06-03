"use client";

import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  external = false,
}: MagneticButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-navy hover:bg-cream shadow-lg",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className={combinedClassName}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
