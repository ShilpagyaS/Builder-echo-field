import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "yaml",
  fileName,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-slate-200 bg-slate-950 text-sm dark:border-slate-800",
        className,
      )}
    >
      {fileName && (
        <div className="border-b border-slate-200 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-400 dark:border-slate-800">
          {fileName}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-white">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
