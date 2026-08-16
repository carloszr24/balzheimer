import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AssociationSection from "@/components/sections/AssociationSection";
import DiseaseSection from "@/components/sections/DiseaseSection";
import CollaborateSection from "@/components/sections/CollaborateSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const timeout = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <NewsSection />
        <AboutSection />
        <ServicesSection />
        <AssociationSection />
        <DiseaseSection />
        <CollaborateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
