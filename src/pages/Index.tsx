import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import AboutSection from "@/components/sections/AboutSection";
import AssociationSection from "@/components/sections/AssociationSection";
import DiseaseSection from "@/components/sections/DiseaseSection";
import CollaborateSection from "@/components/sections/CollaborateSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <NewsSection />
        <AboutSection />
        <AssociationSection />
        <DiseaseSection />
        <CollaborateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
