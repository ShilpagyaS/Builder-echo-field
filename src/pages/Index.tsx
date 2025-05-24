import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { CaseStudySection } from "@/components/landing/CaseStudySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  // Personal information - in a real application, this might come from a CMS or API
  const personalInfo = {
    name: "John Doe", // Replace with your name
    title: "DevSecOps Engineer & Security Researcher",
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-green-500">
      <Navbar />
      <main>
        <HeroSection name={personalInfo.name} />
        <ServicesSection />
        <CaseStudySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Custom styles for cybersecurity theme */}
      <style jsx global>{`
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        body {
          background-color: #000;
          color: #00ff00;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default Index;
