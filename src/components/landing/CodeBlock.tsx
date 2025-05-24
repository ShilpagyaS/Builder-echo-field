import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, X, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
  animated?: boolean;
}

export function CodeBlock({
  code,
  language = "yaml",
  fileName,
  className,
  animated = false,
}: CodeBlockProps) {
  const [displayedCode, setDisplayedCode] = useState(animated ? "" : code);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(animated);

  useEffect(() => {
    if (!animated) return;

    let currentIndex = 0;
    const speed = 5; // ms per character

    const typeNextCharacter = () => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextCharacter, Math.random() * speed + speed);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(typeNextCharacter, 1000); // Initial delay

    return () => clearTimeout(timer);
  }, [code, animated]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-green-900/50 bg-slate-950 text-sm shadow-[0_0_15px_rgba(0,255,0,0.1)] transition-all duration-300",
        isExpanded ? "fixed inset-4 z-50" : "relative",
        className,
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-green-900/30 bg-black px-4 py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-green-500" />
          <span className="text-xs font-mono font-medium text-green-400">
            {fileName || `${language}-terminal`}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleExpand}
            className="rounded p-1 text-green-500 hover:bg-green-900/20"
          >
            {isExpanded ? (
              <Minimize2 className="h-3.5 w-3.5" />
            ) : (
              <Maximize2 className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            onClick={() => setIsExpanded(false)}
            className="rounded p-1 text-green-500 hover:bg-green-900/20"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="relative overflow-x-auto bg-gradient-to-b from-black to-slate-950 p-4">
        <pre className="font-mono text-green-400">
          <code className={`language-${language}`}>
            {displayedCode}
            {isTyping && (
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-green-500"></span>
            )}
          </code>
        </pre>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_80%)]"></div>

        {/* Scan Line Effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 h-px bg-green-500/10 blur-[0.5px] animate-[scanline_8s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
