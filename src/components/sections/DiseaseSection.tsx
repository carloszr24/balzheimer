import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, AlertCircle, Heart, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const DiseaseSection = () => {
  return (
    <section id="la-enfermedad" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            La enfermedad de Alzheimer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Información esencial para entender y afrontar el Alzheimer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">¿Qué es?</h3>
            <p className="text-muted-foreground text-sm">
              Una enfermedad neurodegenerativa que afecta la memoria y las funciones cognitivas.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Síntomas</h3>
            <p className="text-muted-foreground text-sm">
              Pérdida de memoria, desorientación, cambios de comportamiento y dificultades del lenguaje.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Apoyo</h3>
            <p className="text-muted-foreground text-sm">
              El apoyo emocional y profesional es fundamental para pacientes y familias.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Recursos</h3>
            <p className="text-muted-foreground text-sm">
              Ofrecemos guías, talleres y material educativo para familias y cuidadores.
            </p>
          </Card>
        </div>

        <Card className="p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Preguntas frecuentes
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                ¿Cuáles son las primeras señales del Alzheimer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Las primeras señales incluyen olvidos frecuentes, dificultad para encontrar palabras, 
                desorientación en lugares conocidos, cambios de humor y problemas para realizar tareas 
                cotidianas. Si notas estos síntomas, es importante consultar con un profesional médico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                ¿Cómo puedo ayudar a un familiar con Alzheimer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                La paciencia, el amor y la comprensión son fundamentales. Mantén rutinas estables, 
                comunícate de forma clara y sencilla, y busca apoyo profesional. Nuestra asociación 
                ofrece talleres y grupos de apoyo para familias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                ¿Existe tratamiento para el Alzheimer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Actualmente no existe cura, pero hay tratamientos que pueden ayudar a ralentizar 
                la progresión y mejorar la calidad de vida. La estimulación cognitiva, el ejercicio 
                físico y el apoyo social son elementos clave del tratamiento integral.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                ¿Qué servicios ofrece la asociación?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ofrecemos centro de día, talleres de estimulación cognitiva, grupos de apoyo para 
                familiares, formación para cuidadores, asesoramiento psicológico y actividades 
                terapéuticas adaptadas a cada etapa de la enfermedad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <div className="text-center mt-10">
          <Button asChild variant="hero" size="lg">
            <Link to="/sobre-el-alzheimer">Saber más sobre el Alzheimer</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiseaseSection;
