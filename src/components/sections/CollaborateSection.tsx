import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, Gift } from "lucide-react";
import DonationModal from "@/components/DonationModal";
import { site } from "@/data/site";

const CollaborateSection = () => {
  return (
    <section id="colabora" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Colabora con nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu ayuda puede marcar una gran diferencia en la vida de muchas personas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300 flex flex-col">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Voluntariado</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Únete a nuestro equipo de voluntarios y dedica tu tiempo a ayudar a quienes más lo necesitan.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href={`${site.emailHref}?subject=${encodeURIComponent("Quiero ser voluntario/a")}`}>
                Quiero ser voluntario/a
              </a>
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300 flex flex-col">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Donaciones</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Tu aportación económica nos ayuda a mantener y mejorar nuestros servicios.
            </p>
            <DonationModal />
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300 flex flex-col">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Hazte socio</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Como socio, apoyas de forma continuada nuestra labor y recibes información de todas nuestras actividades.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href={`${site.emailHref}?subject=${encodeURIComponent("Quiero hacerme socio/a")}`}>
                Quiero hacerme socio/a
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
