import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Lock,
  CloudLightning,
  Terminal,
  Cpu,
} from "lucide-react";
import { MatrixBackground } from "./MatrixBackground";
import { MultiLineTerminal } from "./TerminalEffect";

interface HeroSectionProps {
  name: string;
}

export function HeroSection({ name }: HeroSectionProps) {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const terminalLines = [
    "Initializing security scanner...",
    "Scanning network perimeter...",
    "Analyzing cloud infrastructure...",
    "Checking CI/CD pipeline security...",
    "Assessing Kubernetes cluster configuration...",
    "Security assessment complete.",
    `Security expert: ${name} - Ready to defend your systems.`,
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 text-green-500">
      <MatrixBackground color="#00ff0066" density={0.3} />

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-md border border-green-500/20 bg-black/70 px-4 py-2 text-sm font-mono text-green-400 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
            <Terminal className="h-4 w-4 text-green-500" />
            <span>Cloudshra sec lab Engineer & Security Researcher</span>
          </div>

          <h1 className="mt-6 font-mono text-5xl font-bold tracking-tight text-green-500 sm:text-6xl md:text-7xl">
            {name}
          </h1>

          <div className="mt-6 w-full max-w-3xl rounded-md border border-green-900/50 bg-black/70 p-4 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
            {showTerminal && (
              <MultiLineTerminal
                lines={terminalLines}
                speed={20}
                prompt="$"
                className="text-left"
              />
            )}
          </div>

          <p className="mt-6 max-w-3xl font-mono text-2xl font-medium leading-relaxed text-green-400 sm:text-3xl">
            Secure your cloud. Harden your pipelines. Sleep peacefully.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2 border border-green-500/50 bg-black px-6 py-6 text-lg font-mono text-green-500 shadow-[0_0_10px_rgba(0,255,0,0.3)] transition-all hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
            >
              Book Free Audit
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border border-green-500/30 bg-black/50 px-6 py-6 text-lg font-mono text-green-400 transition-all hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              See My Work
              <Cpu className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-green-400">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-500" />
              <span className="font-mono">End-to-end security</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="font-mono">Compliance-ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudLightning className="h-5 w-5 text-green-500" />
              <span className="font-mono">Cloud-native solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
