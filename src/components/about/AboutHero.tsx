export default function AboutHero() {
  return (
    <section className="bg-navy text-white py-32 pt-40 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-snug text-white">
          &ldquo;A house is more than walls and furniture — it is where life
          unfolds, memories are made, and futures are built.&rdquo;
        </p>

        <div className="h-0.5 w-20 bg-primary-400 mx-auto mt-10" />

        <p className="text-sm uppercase tracking-widest text-white/60 mt-6">
          Founded 2019 · Selangor, Malaysia · 150+ Projects
        </p>
      </div>
    </section>
  );
}
