import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Menu, X, Shield, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-900/30 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 font-mono text-lg font-bold text-green-500"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-green-900/50 bg-black shadow-[0_0_5px_rgba(0,255,0,0.3)]">
                <Lock className="h-4 w-4 text-green-500" />
              </div>
              <span>Cloudshra Sec</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <a
              href="#services"
              className="font-mono text-sm font-medium text-slate-300 transition-colors hover:text-green-500"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="font-mono text-sm font-medium text-slate-300 transition-colors hover:text-green-500"
            >
              Case Studies
            </a>
            <a
              href="#testimonials"
              className="font-mono text-sm font-medium text-slate-300 transition-colors hover:text-green-500"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-mono text-sm font-medium text-slate-300 transition-colors hover:text-green-500"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="border border-green-500/30 bg-black font-mono text-green-500 shadow-[0_0_5px_rgba(0,255,0,0.3)] transition-all hover:bg-green-500/10 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]">
              <Shield className="mr-2 h-4 w-4" />
              Security Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-md border border-green-900/30 bg-black/50 p-2 text-green-500 transition-colors hover:bg-green-900/20 md:hidden"
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
          "absolute inset-x-0 top-16 z-50 border-b border-green-900/30 bg-black/95 p-4 transition-all duration-300 ease-in-out md:hidden",
          {
            "translate-y-0 opacity-100": isMenuOpen,
            "-translate-y-full opacity-0": !isMenuOpen,
          },
        )}
      >
        <nav className="flex flex-col space-y-4">
          <a
            href="#services"
            className="flex items-center gap-2 py-2 font-mono text-base font-medium text-slate-300 hover:text-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <Terminal className="h-4 w-4 text-green-500" />
            Services
          </a>
          <a
            href="#case-studies"
            className="flex items-center gap-2 py-2 font-mono text-base font-medium text-slate-300 hover:text-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <Terminal className="h-4 w-4 text-green-500" />
            Case Studies
          </a>
          <a
            href="#testimonials"
            className="flex items-center gap-2 py-2 font-mono text-base font-medium text-slate-300 hover:text-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <Terminal className="h-4 w-4 text-green-500" />
            Testimonials
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 py-2 font-mono text-base font-medium text-slate-300 hover:text-green-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <Terminal className="h-4 w-4 text-green-500" />
            Contact
          </a>
          <Button
            className="mt-2 w-full gap-2 border border-green-500/30 bg-black font-mono text-green-500 shadow-[0_0_5px_rgba(0,255,0,0.3)] transition-all hover:bg-green-500/10 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <Shield className="h-4 w-4" />
            Security Audit
          </Button>
        </nav>
      </div>
    </header>
  );
}
