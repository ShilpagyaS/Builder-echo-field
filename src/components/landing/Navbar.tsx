import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"
            >
              <Lock className="h-5 w-5 text-blue-600" />
              <span>DevSecOps</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Case Studies
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Book Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 z-50 border-b border-slate-200 bg-white p-4 transition-all duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 md:hidden",
          {
            "translate-y-0 opacity-100": isMenuOpen,
            "-translate-y-full opacity-0": !isMenuOpen,
          },
        )}
      >
        <nav className="flex flex-col space-y-4">
          <a
            href="#services"
            className="py-2 text-base font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#case-studies"
            className="py-2 text-base font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Studies
          </a>
          <a
            href="#testimonials"
            className="py-2 text-base font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="py-2 text-base font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Free Audit
          </Button>
        </nav>
      </div>
    </header>
  );
}
