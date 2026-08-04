import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const PdfModal = ({ isOpen, onClose, pdfUrl, title }: PdfModalProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[95vh] p-0 overflow-hidden flex flex-col" >
        <DialogHeader className="px-6 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleOpenNewTab}
                className="h-8 px-3"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir en pestaña
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="h-8 px-3"
              >
                <Download className="h-4 w-4 mr-2" />
                Descargar
              </Button>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-accent transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 min-h-0 w-full h-full overflow-hidden">
          <object
            data={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH&page=1`}
            type="application/pdf"
            className="block w-full h-full"
            aria-label={title}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <p className="text-muted-foreground">
                Tu navegador no puede mostrar el PDF directamente.
              </p>
              <div className="flex gap-3">
                <Button onClick={handleOpenNewTab} variant="default">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Abrir en nueva pestaña
                </Button>
                <Button onClick={handleDownload} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </div>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfModal;
