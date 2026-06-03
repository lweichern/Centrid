interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "word" | "char";
}

export default function SplitText({
  text,
  className = "",
  as: Tag = "h1",
}: SplitTextProps) {
  return <Tag className={className}>{text}</Tag>;
}
