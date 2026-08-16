import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";

const presetAmounts = [10, 20, 50, 100];

const DonationModal = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"amount" | "checkout">("amount");
  const [amount, setAmount] = useState<number | null>(20);
  const [customAmount, setCustomAmount] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const reset = () => {
    setStep("amount");
    setAmount(20);
    setCustomAmount("");
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) reset();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="hero" className="w-full">
          Donar ahora
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {step === "amount" ? (
          <>
            <DialogHeader>
              <DialogTitle>Haz tu donación</DialogTitle>
              <DialogDescription>
                Elige la cantidad con la que quieres ayudarnos. Cada aportación cuenta.
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-4 gap-3 py-2">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-lg border font-semibold transition-all duration-200 ${
                    amount === value && !customAmount
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-input hover:border-primary"
                  }`}
                >
                  {value}€
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-amount">Otra cantidad</Label>
              <Input
                id="custom-amount"
                type="number"
                min={1}
                inputMode="decimal"
                placeholder="Ej. 35"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount(null);
                }}
              />
            </div>

            <DialogFooter>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                disabled={!finalAmount || finalAmount <= 0}
                onClick={() => setStep("checkout")}
              >
                Continuar
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Vas a donar {finalAmount}€</DialogTitle>
              <DialogDescription>
                Pago seguro a través de nuestro TPV virtual.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-lg border border-dashed border-primary/40 bg-primary/5 p-6 text-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Esta pasarela de pago está en preparación. En cuanto esté conectado
                el TPV virtual de la asociación, aquí se completará el pago de
                forma segura sin salir de la web.
              </p>
            </div>

            <DialogFooter className="sm:justify-between gap-2">
              <Button variant="outline" onClick={() => setStep("amount")}>
                Volver
              </Button>
              <Button variant="hero" disabled>
                Ir al pago seguro
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
