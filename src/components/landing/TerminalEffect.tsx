import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalEffectProps {
  text: string;
  className?: string;
  speed?: number;
  prompt?: string;
  blinkCursor?: boolean;
  onComplete?: () => void;
}

export function TerminalEffect({
  text,
  className,
  speed = 30,
  prompt = ">",
  blinkCursor = true,
  onComplete,
}: TerminalEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(
          typeNextCharacter,
          Math.random() * speed + speed / 2,
        );
      } else if (onComplete) {
        onComplete();
      }
    };

    typeNextCharacter();

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, onComplete]);

  useEffect(() => {
    if (!blinkCursor) return;

    const blinkTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(blinkTimer);
    };
  }, [blinkCursor]);

  return (
    <div className={cn("font-mono", className)}>
      <span className="text-green-500">{prompt} </span>
      <span>{displayedText}</span>
      {blinkCursor && (
        <span
          className={`ml-0.5 inline-block w-2 h-5 bg-green-500 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        ></span>
      )}
    </div>
  );
}

interface MultiLineTerminalProps {
  lines: string[];
  className?: string;
  speed?: number;
  prompt?: string;
  startDelay?: number;
}

export function MultiLineTerminal({
  lines,
  className,
  speed = 30,
  prompt = ">",
  startDelay = 0,
}: MultiLineTerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLineIndex(0);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (currentLineIndex >= 0 && currentLineIndex < lines.length) {
      setDisplayedLines((prev) => [...prev, lines[currentLineIndex]]);
    } else if (currentLineIndex >= lines.length) {
      setIsComplete(true);
    }
  }, [currentLineIndex, lines]);

  const handleLineComplete = () => {
    setCurrentLineIndex((prev) => prev + 1);
  };

  return (
    <div className={cn("font-mono text-sm space-y-1", className)}>
      {displayedLines.map((line, index) => (
        <div key={index} className="flex">
          {index < currentLineIndex || isComplete ? (
            <>
              <span className="text-green-500 mr-2">{prompt}</span>
              <span>{line}</span>
            </>
          ) : index === currentLineIndex ? (
            <TerminalEffect
              text={line}
              prompt={prompt}
              speed={speed}
              blinkCursor={index === displayedLines.length - 1 && !isComplete}
              onComplete={handleLineComplete}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
