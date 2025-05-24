import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, CloudLightning } from "lucide-react";

interface HeroSectionProps {
  name: string;
}

export function HeroSection({ name }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-slate-700/30">
            <Shield className="h-4 w-4 text-blue-400" />
            <span>DevSecOps Engineer & Security Researcher</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            {name}
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-slate-300 sm:text-3xl">
            Secure your cloud. Harden your pipelines. Sleep peacefully.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 rounded-md bg-blue-600 px-6 py-6 text-lg font-medium text-white hover:bg-blue-700"
            >
              Book Free Audit
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-md border-slate-700 bg-slate-800/50 px-6 py-6 text-lg font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              See My Work
              <CloudLightning className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-400" />
              <span>End-to-end security</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <span>Compliance-ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudLightning className="h-5 w-5 text-blue-400" />
              <span>Cloud-native solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
