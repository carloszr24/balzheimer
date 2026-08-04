/**
 * Novedades mostradas en el carrusel de la web.
 *
 * Cómo actualizar (mientras no haya token de Meta Graph API):
 * 1. Publicad en Facebook como siempre.
 * 2. Añadid aquí un objeto con título, resumen, fecha, imagen y el enlace del post.
 * 3. Haced commit/push (o pedidnos que lo actualicemos).
 *
 * Cuando la asociación tenga un Page Access Token de Meta, se podrá
 * sincronizar automáticamente desde la API de Facebook.
 */
import activitiesImage from "@/assets/activities.jpg";
import artTherapyImage from "@/assets/art-therapy.jpg";
import familySupportImage from "@/assets/family-support.jpg";
import musicTherapyImage from "@/assets/music-therapy.jpg";
import physicalTherapyImage from "@/assets/physical-therapy.jpg";

export type Novedad = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  image: string;
  facebookUrl: string;
};

export const novedades: Novedad[] = [
  {
    id: "jornadas-alzheimer",
    title: "Jornadas por el Día Mundial del Alzheimer",
    excerpt:
      "Visibilizamos la enfermedad y la necesidad de una atención específica, con talleres y encuentros abiertos a toda la comunidad de Palma del Río.",
    date: "2024-09-21",
    image: activitiesImage,
    facebookUrl: "https://www.facebook.com/Balzheime/",
  },
  {
    id: "estimulacion-cognitiva",
    title: "Talleres de estimulación cognitiva",
    excerpt:
      "Cada semana trabajamos memoria, lenguaje y orientación en un ambiente cercano, con profesionales y voluntariado comprometido.",
    date: "2025-03-12",
    image: artTherapyImage,
    facebookUrl: "https://www.facebook.com/Balzheime/",
  },
  {
    id: "apoyo-familias",
    title: "Acompañamiento a familias y cuidadores",
    excerpt:
      "Espacios de escucha, formación y apoyo mutuo para quienes cuidan cada día a una persona con Alzheimer u otra demencia.",
    date: "2025-05-08",
    image: familySupportImage,
    facebookUrl: "https://www.facebook.com/Balzheime/",
  },
  {
    id: "neuractivate",
    title: "Programa Neuractivate",
    excerpt:
      "Apostamos por un envejecimiento activo y saludable, con prevención y detección temprana para llegar antes al deterioro.",
    date: "2025-06-20",
    image: physicalTherapyImage,
    facebookUrl: "https://www.facebook.com/Balzheime/",
  },
  {
    id: "musicoterapia",
    title: "Sesiones de musicoterapia",
    excerpt:
      "La música despierta recuerdos y emociones. Compartimos momentos de alegría y conexión a través del canto y el ritmo.",
    date: "2025-07-15",
    image: musicTherapyImage,
    facebookUrl: "https://www.facebook.com/Balzheime/",
  },
];
