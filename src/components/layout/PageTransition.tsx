interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return <main>{children}</main>;
}
