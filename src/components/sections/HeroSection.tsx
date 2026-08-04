import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-alzheimer.jpg";

const HeroSection = () => {
  const scrollToColabora = () => {
    const element = document.getElementById("colabora");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Juntos contra el Alzheimer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Cada persona merece vivir con dignidad, amor y apoyo. 
            Acompañamos a las familias en cada paso del camino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToColabora} variant="hero" size="lg">
              Colabora con nosotros
            </Button>
            <Button 
              onClick={() => document.getElementById("quienes-somos")?.scrollIntoView({ behavior: "smooth" })}
              variant="soft" 
              size="lg"
            >
              Conoce nuestra labor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
