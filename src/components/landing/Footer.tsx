import React from "react";
import { Github, Linkedin, Twitter, Lock, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-green-900/30 bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <p className="font-mono text-slate-400">
              © {currentYear} Cloudshra Sec. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-green-900/30 bg-black text-green-500 transition-all hover:border-green-500/50 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-green-900/30 bg-black text-green-500 transition-all hover:border-green-500/50 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)]"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-green-900/30 bg-black text-green-500 transition-all hover:border-green-500/50 hover:shadow-[0_0_10px_rgba(0,255,0,0.3)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-fit items-center gap-2 rounded-md border border-green-900/20 bg-black/50 px-3 py-2">
            <Lock className="h-4 w-4 text-green-500" />
            <p className="font-mono text-xs text-slate-400">
              Secured with end-to-end encryption and advanced threat protection
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
