import { useState } from "react";
import { HeartPulse, Users, Brain, Search, Megaphone } from "lucide-react";
import familySupportImage from "@/assets/family-support.jpg";
import aboutImage from "@/assets/about-hands.jpg";
import artTherapyImage from "@/assets/art-therapy.jpg";
import physicalTherapyImage from "@/assets/physical-therapy.jpg";
import activitiesImage from "@/assets/activities.jpg";

const services = [
  {
    icon: HeartPulse,
    title: "Área de Psicología",
    description:
      "Información, orientación, apoyo emocional y afectivo a personas con demencia, familiares y cuidadores. Evaluación y rehabilitación neuropsicológica.",
    image: familySupportImage,
  },
  {
    icon: Users,
    title: "Área de Trabajo Social",
    description:
      "Orientación e información para familiares y cuidadores. Te ayudamos a conocer los recursos, prestaciones y ayudas disponibles y te acompañamos en los trámites que necesitas.",
    image: aboutImage,
  },
  {
    icon: Brain,
    title: "Talleres de estimulación cognitiva",
    description:
      "Actividades adaptadas para personas con demencia o deterioro cognitivo que favorecen la memoria, la atención, el lenguaje y otras capacidades, manteniendo la autonomía el mayor tiempo posible.",
    image: artTherapyImage,
  },
  {
    icon: Search,
    title: "Prevención y detección",
    description:
      "Programas dirigidos a la prevención del deterioro cognitivo y a la detección precoz, promoviendo un envejecimiento activo y saludable.",
    image: physicalTherapyImage,
  },
  {
    icon: Megaphone,
    title: "Sensibilización y divulgación",
    description:
      "Trabajamos para dar visibilidad a la demencia, romper estigmas y crear una sociedad más informada, empática y comprometida.",
    image: activitiesImage,
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompañamos, orientamos y cuidamos. Estos son nuestros servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === active;
              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-card border-primary shadow-card"
                      : "bg-transparent border-transparent hover:bg-card/60"
                  }`}
                >
                  <div
                    className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <img
                    src={service.image}
                    alt=""
                    className="w-14 h-14 rounded-lg object-cover shrink-0 md:hidden"
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden md:block sticky top-24 relative rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
            {services.map((service, index) => (
              <img
                key={service.title}
                src={service.image}
                alt={service.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground text-xl font-display font-semibold">
                {services[active].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
