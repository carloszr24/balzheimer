import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, FileText, Coffee, BookOpen } from "lucide-react";
import PdfModal from "@/components/PdfModal";

const AssociationSection = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

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
