
import * as React from "react";
import { cn } from "@/lib/utils";
import NavCard from "./NavCard";
import { LucideIcon } from "lucide-react";

interface SiteData {
  title: string;
  description: string;
  url: string;
  icon?: LucideIcon;
  category?: string;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  sites: SiteData[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  sites,
  className,
}) => {
  return (
    <section className={cn("py-10", className)}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto animate-slide-up">
        <div className="mb-8">
          <h2 className="category-title text-2xl font-semibold mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-3xl">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sites.map((site, index) => (
            <NavCard
              key={`${site.title}-${index}`}
              title={site.title}
              description={site.description}
              url={site.url}
              icon={site.icon}
              category={site.category}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
