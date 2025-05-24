import React, { useEffect, useRef } from "react";

interface MatrixBackgroundProps {
  className?: string;
  speed?: number;
  density?: number;
  color?: string;
}

export function MatrixBackground({
  className = "",
  speed = 50,
  density = 0.5,
  color = "#0f0",
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters =
      "01010101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン10101010";
    const charArray = characters.split("");

    const fontSize = 14;
    const columns = Math.floor((width / fontSize) * density);

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationFrameId: number;

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, width, height);

      context.fillStyle = color;
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.floor((width / fontSize) * density);

      // Adjust drops array for new width
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100;
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [density, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
    />
  );
}
