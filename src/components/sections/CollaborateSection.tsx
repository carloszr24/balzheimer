import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HeartHandshake, Users, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CollaborateSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "voluntario"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "voluntario"
    });
  };

  return (
    <section id="colabora" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Colabora con nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu ayuda puede marcar una gran diferencia en la vida de muchas personas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Voluntariado</h3>
            <p className="text-muted-foreground mb-4">
              Únete a nuestro equipo de voluntarios y dedica tu tiempo a ayudar a quienes más lo necesitan.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Donaciones</h3>
            <p className="text-muted-foreground mb-4">
              Tu aportación económica nos ayuda a mantener y mejorar nuestros servicios.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Hazte socio</h3>
            <p className="text-muted-foreground mb-4">
              Como socio, apoyas de forma continuada nuestra labor y recibes información de todas nuestras actividades.
            </p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Formulario de contacto
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Quiero colaborar como *</Label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                required
              >
                <option value="voluntario">Voluntario</option>
                <option value="donacion">Hacer una donación</option>
                <option value="socio">Hacerme socio</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos cómo te gustaría colaborar..."
                rows={4}
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Enviar solicitud
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default CollaborateSection;
