import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Brain,
  AlertCircle,
  Heart,
  FileText,
  Search,
  Stethoscope,
  Users,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { site } from "@/data/site";

const stages = [
  {
    title: "Fase leve",
    description:
      "Olvidos frecuentes de citas o conversaciones recientes, dificultad para encontrar palabras, pequeños despistes en tareas cotidianas y algo de desorientación en lugares poco habituales. La persona suele mantener bastante autonomía.",
  },
  {
    title: "Fase moderada",
    description:
      "Aumentan los olvidos, incluso de datos personales o hechos recientes. Aparecen dificultades para vestirse, cocinar o manejar dinero, cambios de humor más marcados y mayor necesidad de supervisión en el día a día.",
  },
  {
    title: "Fase avanzada",
    description:
      "Pérdida importante de autonomía: dificultad para comunicarse, reconocer a familiares o realizar actividades básicas como comer o asearse. La persona necesita cuidados y atención constantes.",
  },
];

const faqs = [
  {
    question: "¿Qué es exactamente el Alzheimer?",
    answer:
      "Es la forma más común de demencia, una enfermedad neurodegenerativa progresiva que afecta principalmente a la memoria, el pensamiento y el comportamiento. Con el tiempo, daña las neuronas y las conexiones del cerebro, lo que va reduciendo la capacidad de la persona para desenvolverse de forma autónoma.",
  },
  {
    question: "¿Cuáles son las primeras señales del Alzheimer?",
    answer:
      "Olvidos frecuentes de información reciente, dificultad para encontrar palabras, desorientación en lugares conocidos, cambios de humor o de personalidad y problemas para realizar tareas cotidianas que antes resultaban sencillas. Un despiste puntual no es motivo de alarma, pero si estos signos se repiten y afectan al día a día, conviene consultar con un profesional.",
  },
  {
    question: "¿A qué edad suele aparecer?",
    answer:
      "La mayoría de los casos se diagnostican a partir de los 65 años, y el riesgo aumenta con la edad. Existen también formas de aparición temprana, antes de los 65, aunque son mucho menos frecuentes.",
  },
  {
    question: "¿Es hereditario?",
    answer:
      "Tener un familiar directo con Alzheimer puede aumentar ligeramente el riesgo, pero en la gran mayoría de los casos la enfermedad no sigue un patrón hereditario claro. Influyen muchos otros factores, como la edad, la salud cardiovascular y el estilo de vida.",
  },
  {
    question: "¿Existe tratamiento o cura?",
    answer:
      "Actualmente no existe una cura, pero hay tratamientos farmacológicos y no farmacológicos que pueden ayudar a ralentizar la progresión de los síntomas y mejorar la calidad de vida. La estimulación cognitiva, el ejercicio físico, una buena alimentación y el apoyo social son elementos clave del abordaje integral.",
  },
  {
    question: "¿Cómo se diagnostica?",
    answer:
      "El diagnóstico lo realiza un profesional médico (habitualmente neurología o geriatría) mediante la valoración de los síntomas, pruebas cognitivas, análisis clínicos y, en muchos casos, pruebas de imagen cerebral. Un diagnóstico temprano permite empezar antes con las terapias de apoyo.",
  },
  {
    question: "¿Cómo puedo ayudar a un familiar con Alzheimer?",
    answer:
      "La paciencia, el amor y la comprensión son fundamentales. Mantén rutinas estables, comunícate de forma clara y sencilla, adapta el entorno para que sea seguro y busca apoyo profesional. Nuestra asociación ofrece talleres, información y grupos de apoyo para familias y cuidadores.",
  },
  {
    question: "¿Qué servicios ofrece la asociación?",
    answer:
      "Ofrecemos centro de día, talleres de estimulación cognitiva, grupos de apoyo para familiares, formación para cuidadores, asesoramiento y actividades terapéuticas adaptadas a cada etapa de la enfermedad.",
  },
];

const AboutDisease = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-16 bg-warm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              La enfermedad de Alzheimer
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Toda la información esencial para entender el Alzheimer, reconocer
              sus señales y saber cómo actuar si crees que afecta a alguien
              cercano a ti.
            </p>
          </div>
        </section>

        {/* Qué es / resumen en tarjetas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">¿Qué es?</h3>
                <p className="text-muted-foreground text-sm">
                  Una enfermedad neurodegenerativa progresiva que afecta a la
                  memoria y a las funciones cognitivas.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Síntomas</h3>
                <p className="text-muted-foreground text-sm">
                  Pérdida de memoria, desorientación, cambios de comportamiento
                  y dificultades del lenguaje.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Diagnóstico</h3>
                <p className="text-muted-foreground text-sm">
                  Una valoración médica temprana permite empezar antes con las
                  terapias y el apoyo adecuados.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Apoyo</h3>
                <p className="text-muted-foreground text-sm">
                  El acompañamiento emocional y profesional es fundamental para
                  pacientes y familias.
                </p>
              </Card>
            </div>

            {/* Causas y factores de riesgo */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
              <Card className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Causas y factores de riesgo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  El Alzheimer se produce por la acumulación anómala de
                  proteínas en el cerebro, que daña progresivamente las
                  neuronas. No hay una causa única: la edad avanzada, los
                  antecedentes familiares, la salud cardiovascular, la
                  diabetes, el sedentarismo o un bajo nivel de estimulación
                  cognitiva son factores que pueden aumentar el riesgo.
                </p>
              </Card>

              <Card className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Prevención y hábitos saludables
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aunque no existe una forma garantizada de evitarlo, mantener
                  una vida activa físicamente, cuidar la alimentación, dormir
                  bien, mantener relaciones sociales y ejercitar la mente con
                  lectura, juegos o nuevas actividades puede ayudar a proteger
                  la salud cerebral.
                </p>
              </Card>
            </div>

            {/* Fases de la enfermedad */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Fases de la enfermedad
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  El Alzheimer evoluciona de forma gradual y distinta en cada
                  persona. Conocer sus fases ayuda a anticiparse y a adaptar
                  los cuidados en cada momento.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {stages.map((stage) => (
                  <Card key={stage.title} className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cómo ayudar */}
            <Card className="p-8 max-w-5xl mx-auto mb-16 bg-warm border-none">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Cómo acompañar a un familiar con Alzheimer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantener rutinas estables, comunicarse con frases claras y
                    sencillas, cuidar la seguridad del hogar y evitar
                    discusiones ante los olvidos son algunas claves del día a
                    día. Pero no hace falta hacerlo solos: en {site.shortName}{" "}
                    ofrecemos información, formación y grupos de apoyo para que
                    las familias y cuidadores no se sientan solas en el
                    proceso.
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-8 max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Preguntas frecuentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Crees que algún conocido presenta indicios de Alzheimer?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Ponte en contacto con nosotros y te ayudamos. Nuestro equipo te
              orientará sobre los siguientes pasos, sin compromiso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href={site.phoneHref} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={site.emailHref} className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Enviar email
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutDisease;
