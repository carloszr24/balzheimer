import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

/**
 * ImageCarousel Component
 * 
 * Carrusel automático de imágenes con navegación manual y autoplay.
 * 
 * Props:
 * - slides: Array de objetos con { src: string, alt: string, title?: string, content?: string[] }
 * - autoplayDelay: Tiempo en milisegundos entre transiciones (default: 5000)
 * - className: Clases CSS adicionales para el contenedor
 * - onSlideChange: Callback que se ejecuta cuando cambia la slide actual
 * 
 * Para añadir nuevas imágenes locales:
 * 1. Importar la imagen: import newImage from "@/assets/new-image.jpg"
 * 2. Añadirla al array slides en el componente padre
 * 
 * Para conectar con una API:
 * 1. Crear un hook personalizado que haga fetch de las imágenes
 * 2. Pasar las imágenes obtenidas como prop
 * 3. Ejemplo:
 *    const { data: apiSlides, isLoading } = useSlides();
 *    <ImageCarousel slides={apiSlides || defaultSlides} />
 */

export interface CarouselSlide {
  src: string;
  alt: string;
  title?: string;
  content?: string[];
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  autoplayDelay?: number;
  className?: string;
  onSlideChange?: (index: number) => void;
}

const ImageCarousel = ({ 
  slides, 
  autoplayDelay = 5000,
  className = "",
  onSlideChange
}: ImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      onSlideChange?.(newIndex);
    });
  }, [api, onSlideChange]);

  return (
    <div className={`relative ${className}`}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: true,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación */}
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-background/90" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90" />
      </Carousel>

      {/* Indicadores de puntos */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
