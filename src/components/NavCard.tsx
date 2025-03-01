
import * as React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface NavCardProps {
  title: string;
  description: string;
  url: string;
  icon?: LucideIcon;
  category?: string;
  className?: string;
}

const NavCard: React.FC<NavCardProps> = ({
  title,
  description,
  url,
  icon: Icon,
  category,
  className,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "nav-card group block p-6 h-full rounded-xl bg-nav-card border border-border hover:border-nav-accent/30 hover:bg-nav-hover animate-scale-in",
        className
      )}
    >
      <div className="flex flex-col h-full space-y-2">
        <div className="flex items-center space-x-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-nav-accent/10 group-hover:text-nav-accent">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div className="font-medium text-lg">{title}</div>
        </div>
        
        {category && (
          <div className="mt-1">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              {category}
            </span>
          </div>
        )}
        
        <p className="text-sm text-muted-foreground mt-2 flex-grow">
          {description}
        </p>
        
        <div className="pt-2 text-sm font-medium text-nav-accent opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Visit site
          <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
};

export default NavCard;
