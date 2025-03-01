
import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative">
        <div className="font-bold text-3xl md:text-4xl tracking-tight animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-nav-accent">
            Navi
          </span>
          <span>Hub</span>
          <span className="absolute -top-2 -right-2 h-2 w-2 rounded-full bg-nav-accent animate-pulse-gentle" />
        </div>
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20 blur-lg rounded-full transform scale-150 opacity-0 animate-pulse-gentle" />
      </div>
    </div>
  );
};

export default AnimatedLogo;
