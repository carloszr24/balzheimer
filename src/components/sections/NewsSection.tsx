import { useEffect, useState } from "react";
import { ExternalLink, Facebook } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { novedades } from "@/data/novedades";
import { site } from "@/data/site";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const NewsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="novedades" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
              Actualidad
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Novedades
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo último de nuestra asociación. Las publicaciones de Facebook se
              van sumando aquí para que familias y vecinos estén al día.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 self-start md:self-auto">
            <a
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4" />
              Ver en Facebook
            </a>
          </Button>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 5500,
              stopOnInteraction: true,
            }),
          ]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {novedades.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={item.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <Card className="h-full overflow-hidden border-border/80 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs font-medium text-primary-foreground bg-primary/90 px-2.5 py-1 rounded-md">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-display text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Leer en Facebook
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border shadow-sm" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border shadow-sm" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {novedades.map((item, index) => (
            <button
              key={item.id}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a novedad ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
