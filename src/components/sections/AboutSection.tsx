import { Heart, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-hands.jpg";
import { site } from "@/data/site";

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiénes somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {site.fullName} en {site.location} ({site.province})
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={aboutImage}
              alt="Manos unidas en apoyo"
              className="rounded-2xl shadow-card w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Nuestra historia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Desde {site.foundedYear}, un grupo de familiares se unió buscando
              respuestas y apoyo ante el Alzheimer y otras demencias. Así nació{" "}
              {site.shortName} en {site.location}: un lugar de encuentro,
              cuidado y acompañamiento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {site.tagline} Trabajamos cada día para mejorar la calidad de vida
              de las personas afectadas y de quienes las cuidan, con talleres,
              formación y un espacio donde nadie se sienta solo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nuestra misión
            </h3>
            <p className="text-muted-foreground">
              Apoyar a personas con Alzheimer y otras demencias, y a sus
              familias, con programas cercanos y profesionales.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-brand-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nuestra visión
            </h3>
            <p className="text-muted-foreground">
              Una comunidad donde cada persona viva con dignidad, respeto y el
              mejor acompañamiento posible.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nuestro equipo
            </h3>
            <p className="text-muted-foreground">
              Profesionales, familiares y voluntarios que trabajan unidos cada
              día en {site.location}.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
