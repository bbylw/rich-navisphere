
import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className, 
  placeholder = "Search for websites, tools, resources...",
  onSearch 
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={cn(
        "search-bar relative w-full max-w-3xl mx-auto animate-fade-in",
        className
      )}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-effect w-full pl-12 pr-4 py-4 rounded-xl border-0 ring-1 ring-inset ring-border focus:ring-2 focus:ring-nav-accent focus:outline-none"
          placeholder={placeholder}
          aria-label="Search"
        />
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 animate-pulse-gentle" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
