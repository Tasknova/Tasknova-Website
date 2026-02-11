import * as React from "react";
import { cn } from "./utils";

interface LoaderProps {
  size?: number;
  text?: string;
  className?: string;
}

export const AiLoader: React.FC<LoaderProps> = ({ size = 180, text = "Voice Agent", className }) => {
  const letters = text.split("");

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black",
        "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] border border-white/10",
        className
      )}
      style={{ width: size + 40, height: size + 40 }}
    >
      <div
        className="relative flex items-center justify-center font-semibold text-lg tracking-[0.08em] text-white select-none"
        style={{ width: size, height: size }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-white/80 animate-ai-loader-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
        <div className="absolute inset-0 rounded-full animate-ai-loader-circle" />
      </div>

      <style>{`
        @keyframes ai-loader-circle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #38bdf8 inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #60a5fa inset,
              0 12px 6px 0 #0284c7 inset,
              0 24px 36px 0 #005dff inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #4dc8fd inset,
              0 12px 18px 0 #005dff inset,
              0 36px 36px 0 #1e40af inset,
              0 0 3px 1.2px rgba(56, 189, 248, 0.3),
              0 0 6px 1.8px rgba(0, 93, 255, 0.2);
          }
        }

        @keyframes ai-loader-letter {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        .animate-ai-loader-circle {
          animation: ai-loader-circle 5s linear infinite;
        }
        .animate-ai-loader-letter {
          animation: ai-loader-letter 3s infinite;
        }
      `}</style>
    </div>
  );
};
