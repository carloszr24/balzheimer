import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-alzheimer.jpg";
import { site } from "@/data/site";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55" />
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--hero-gradient)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {site.name} · {site.location}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {site.shortName}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-3 leading-relaxed font-display italic">
            {site.fullName}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            {site.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="lg">
              <a href={site.emailHref}>Contacta con nosotros</a>
            </Button>
            <Button onClick={() => scrollTo("novedades")} variant="soft" size="lg">
              Ver novedades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
