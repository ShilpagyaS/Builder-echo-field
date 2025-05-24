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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection name={personalInfo.name} />
        <ServicesSection />
        <CaseStudySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
