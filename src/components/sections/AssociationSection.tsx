import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, FileText, Coffee, BookOpen } from "lucide-react";
import ImageCarousel, { type CarouselSlide } from "@/components/ImageCarousel";
import PdfModal from "@/components/PdfModal";
import activitiesImage from "@/assets/activities.jpg";
import aboutImage from "@/assets/about-hands.jpg";
import heroImage from "@/assets/hero-alzheimer.jpg";
import artTherapyImage from "@/assets/art-therapy.jpg";
import physicalTherapyImage from "@/assets/physical-therapy.jpg";
import musicTherapyImage from "@/assets/music-therapy.jpg";
import familySupportImage from "@/assets/family-support.jpg";

const AssociationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Slides del carrusel con sus textos asociados
  const carouselSlides: CarouselSlide[] = [
    {
      src: activitiesImage,
      alt: "Actividades en la asociación",
      title: "Nuestro trabajo diario",
      content: [
        "En nuestra asociación, cada día es una oportunidad para hacer la diferencia. Ofrecemos un centro de día donde las personas con Alzheimer participan en actividades terapéuticas en un ambiente cálido y seguro.",
        "Nuestros programas están diseñados por profesionales especializados en demencias, asegurando que cada actividad sea beneficiosa y se adapte a las necesidades individuales de cada persona."
      ]
    },
    {
      src: aboutImage,
      alt: "Manos unidas en apoyo",
      title: "Apoyo familiar integral",
      content: [
        "Entendemos que el Alzheimer afecta a toda la familia. Por eso, ofrecemos grupos de apoyo y formación especializada para familiares y cuidadores.",
        "Nadie debe enfrentar esta enfermedad solo. Creamos un espacio de encuentro donde compartir experiencias, aprender estrategias de cuidado y encontrar el apoyo emocional necesario."
      ]
    },
    {
      src: heroImage,
      alt: "Eventos especiales de la asociación",
      title: "Eventos y celebraciones",
      content: [
        "Organizamos eventos especiales, talleres y celebraciones que fortalecen los vínculos entre nuestros miembros y la comunidad.",
        "Cada actividad está pensada para generar momentos significativos, promover la integración social y visibilizar la importancia del cuidado digno y el respeto hacia las personas con Alzheimer."
      ]
    },
    {
      src: artTherapyImage,
      alt: "Taller de arte terapia",
      title: "Talleres de estimulación cognitiva",
      content: [
        "La creatividad es una herramienta poderosa. Nuestros talleres de arte y manualidades estimulan la memoria, mejoran la coordinación y fomentan la expresión personal.",
        "A través de la pintura, el dibujo y otras actividades artísticas, las personas con Alzheimer encuentran una vía para comunicarse y mantener activas sus capacidades cognitivas en un ambiente de disfrute y bienestar."
      ]
    },
    {
      src: physicalTherapyImage,
      alt: "Terapia física y ejercicio",
      title: "Actividad física adaptada",
      content: [
        "El movimiento es vida. Ofrecemos sesiones de ejercicio físico adaptado que mejoran la movilidad, el equilibrio y el bienestar general de nuestros usuarios.",
        "Bajo la supervisión de fisioterapeutas especializados, cada persona participa en actividades diseñadas según sus capacidades, promoviendo la autonomía y previniendo el deterioro físico."
      ]
    },
    {
      src: musicTherapyImage,
      alt: "Sesión de musicoterapia",
      title: "Musicoterapia",
      content: [
        "La música tiene el poder de despertar recuerdos y emociones. Nuestras sesiones de musicoterapia conectan a las personas con su historia personal y generan momentos de alegría compartida.",
        "Cantar, escuchar y tocar instrumentos no solo estimula la memoria, sino que también fortalece los vínculos afectivos y mejora el estado de ánimo de todos los participantes."
      ]
    },
    {
      src: familySupportImage,
      alt: "Grupos de apoyo familiar",
      title: "Grupos de apoyo y formación",
      content: [
        "Cuidar al cuidador es fundamental. Nuestros grupos de apoyo ofrecen un espacio seguro donde familiares y cuidadores pueden compartir sus experiencias, dudas y emociones.",
        "Organizamos talleres formativos sobre manejo de síntomas, técnicas de comunicación y autocuidado, proporcionando herramientas prácticas para mejorar la calidad de vida tanto de los cuidadores como de las personas afectadas."
      ]
    }
  ];

  const activities = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Estatutos de la asociación",
      description: "Consulta nuestros estatutos para conocer la estructura y normativa que rige nuestra asociación.",
      action: "openPdf"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Grupos de apoyo",
      description: "Espacios de encuentro donde familias y cuidadores comparten experiencias y se apoyan mutuamente."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Centro de día",
      description: "Un lugar seguro y acogedor donde las personas con Alzheimer reciben atención profesional durante el día."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Formación familiar",
      description: "Cursos y talleres para familiares y cuidadores sobre cómo abordar los desafíos del Alzheimer."
    }
  ];

  return (
    <section id="la-asociacion" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            La asociación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros programas y actividades están diseñados para ofrecer apoyo integral
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {carouselSlides[currentSlide].title}
            </h3>
            {carouselSlides[currentSlide].content?.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <ImageCarousel 
              slides={carouselSlides} 
              autoplayDelay={5000}
              onSlideChange={setCurrentSlide}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => {
            const CardContent = (
              <>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </>
            );

            if (activity.action === "openPdf") {
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-card transition-all duration-300 cursor-pointer"
                  onClick={() => setIsPdfModalOpen(true)}
                >
                  {CardContent}
                </Card>
              );
            }

            return (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                {CardContent}
              </Card>
            );
          })}
        </div>

        <PdfModal
          isOpen={isPdfModalOpen}
          onClose={() => setIsPdfModalOpen(false)}
          pdfUrl="/estatutos-asociacion.pdf"
          title="Estatutos de la asociación"
        />
      </div>
    </section>
  );
};

export default AssociationSection;
