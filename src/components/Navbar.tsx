import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("inicio")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Asociación BAlzheimer Palma del Río" className="h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors uppercase">
              Inicio
            </button>
            <button onClick={() => scrollToSection("quienes-somos")} className="text-foreground hover:text-primary transition-colors uppercase">
              Quiénes somos
            </button>
            <button onClick={() => scrollToSection("la-asociacion")} className="text-foreground hover:text-primary transition-colors uppercase">
              La asociación
            </button>
            <button onClick={() => scrollToSection("la-enfermedad")} className="text-foreground hover:text-primary transition-colors uppercase">
              La enfermedad
            </button>
            <Button onClick={() => scrollToSection("colabora")} variant="hero" size="sm" className="uppercase">
              Colabora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("inicio")} className="text-left text-foreground hover:text-primary transition-colors py-2 uppercase">
                Inicio
              </button>
              <button onClick={() => scrollToSection("quienes-somos")} className="text-left text-foreground hover:text-primary transition-colors py-2 uppercase">
                Quiénes somos
              </button>
              <button onClick={() => scrollToSection("la-asociacion")} className="text-left text-foreground hover:text-primary transition-colors py-2 uppercase">
                La asociación
              </button>
              <button onClick={() => scrollToSection("la-enfermedad")} className="text-left text-foreground hover:text-primary transition-colors py-2 uppercase">
                La enfermedad
              </button>
              <Button onClick={() => scrollToSection("colabora")} variant="hero" className="w-full uppercase">
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
