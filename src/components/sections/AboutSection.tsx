import { Heart, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-hands.jpg";

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiénes somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una asociación comprometida con el bienestar de las personas con Alzheimer y sus familias
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
            <h3 className="text-2xl font-semibold text-foreground">
              Nuestra historia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada en 2010, nuestra asociación nació del amor y la necesidad de un grupo 
              de familias que enfrentaban el Alzheimer. Desde entonces, hemos crecido hasta 
              convertirnos en un referente de apoyo y cuidado en nuestra comunidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada día trabajamos para mejorar la calidad de vida de las personas afectadas 
              por esta enfermedad, ofreciendo recursos, formación y un espacio de encuentro 
              donde nadie se sienta solo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Nuestra misión</h3>
            <p className="text-muted-foreground">
              Proporcionar apoyo integral y mejorar la calidad de vida de personas con 
              Alzheimer y sus familias.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Nuestra visión</h3>
            <p className="text-muted-foreground">
              Una sociedad donde cada persona con Alzheimer viva con dignidad, 
              respeto y el mejor cuidado posible.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Nuestro equipo</h3>
            <p className="text-muted-foreground">
              Profesionales especializados, voluntarios comprometidos y familias que 
              trabajan unidos cada día.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
