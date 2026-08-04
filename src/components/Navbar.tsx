import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { site } from "@/data/site";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "novedades", label: "Novedades" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "la-asociacion", label: "La asociación" },
  { id: "la-enfermedad", label: "La enfermedad" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt={`${site.name} ${site.location}`}
              className="h-12 w-auto rounded-md"
            />
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("colabora")}
              variant="hero"
              size="sm"
              className="uppercase"
            >
              Colabora
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 uppercase tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("colabora")}
                variant="hero"
                className="w-full uppercase mt-2"
              >
                Colabora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
