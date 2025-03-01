
import * as React from "react";
import { useState, useEffect } from "react";
import AnimatedLogo from "@/components/AnimatedLogo";
import SearchBar from "@/components/SearchBar";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import { Navigation, Navigation2, ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from "lucide-react";

// Sample navigation data
const navigationData = {
  search: {
    title: "Search Engines",
    description: "Popular websites and tools for finding information on the internet.",
    sites: [
      {
        title: "Google",
        description: "The world's most popular search engine with advanced algorithms and vast index.",
        url: "https://www.google.com",
        icon: Navigation,
        category: "Search"
      },
      {
        title: "Bing",
        description: "Microsoft's search engine with AI-powered features and integration with Microsoft products.",
        url: "https://www.bing.com",
        icon: Navigation,
        category: "Search"
      },
      {
        title: "DuckDuckGo",
        description: "A privacy-focused search engine that doesn't track users or personalize results.",
        url: "https://duckduckgo.com",
        icon: Navigation,
        category: "Privacy"
      },
      {
        title: "Baidu",
        description: "The leading search engine in China with specialized services for Chinese users.",
        url: "https://www.baidu.com",
        icon: Navigation,
        category: "Regional"
      }
    ]
  },
  social: {
    title: "Social Media",
    description: "Connect with others and share content through popular social networking platforms.",
    sites: [
      {
        title: "Twitter",
        description: "Real-time information network connecting you to the latest stories, ideas, and opinions.",
        url: "https://twitter.com",
        icon: Navigation2,
        category: "Social"
      },
      {
        title: "Facebook",
        description: "Connect with friends, family and other people you know. Share photos and videos.",
        url: "https://www.facebook.com",
        icon: Navigation2,
        category: "Social"
      },
      {
        title: "Instagram",
        description: "Photo and video sharing social networking service owned by Facebook.",
        url: "https://www.instagram.com",
        icon: Navigation2,
        category: "Photos"
      },
      {
        title: "LinkedIn",
        description: "Business and employment-oriented online service for professional networking.",
        url: "https://www.linkedin.com",
        icon: Navigation2,
        category: "Professional"
      }
    ]
  },
  productivity: {
    title: "Productivity",
    description: "Tools and applications to boost your efficiency and organize your work.",
    sites: [
      {
        title: "Notion",
        description: "All-in-one workspace for notes, tasks, wikis, and databases.",
        url: "https://www.notion.so",
        icon: ChevronRight,
        category: "Workspace"
      },
      {
        title: "Trello",
        description: "Visual tool for organizing your work and life using boards, lists, and cards.",
        url: "https://trello.com",
        icon: ChevronRight,
        category: "Project Management"
      },
      {
        title: "Google Workspace",
        description: "Suite of cloud computing, productivity and collaboration tools by Google.",
        url: "https://workspace.google.com",
        icon: ChevronRight,
        category: "Collaboration"
      },
      {
        title: "Microsoft 365",
        description: "Subscription service that includes Office apps and cloud-based services.",
        url: "https://www.microsoft.com/microsoft-365",
        icon: ChevronRight,
        category: "Office Suite"
      }
    ]
  },
  learning: {
    title: "Learning",
    description: "Educational resources and platforms for expanding your knowledge and skills.",
    sites: [
      {
        title: "Coursera",
        description: "Online learning platform with courses from top universities and companies.",
        url: "https://www.coursera.org",
        icon: ChevronUp,
        category: "Education"
      },
      {
        title: "Khan Academy",
        description: "Non-profit educational organization with free lessons on various subjects.",
        url: "https://www.khanacademy.org",
        icon: ChevronUp,
        category: "Free Education"
      },
      {
        title: "edX",
        description: "Open online course provider created by Harvard and MIT, offering university-level courses.",
        url: "https://www.edx.org",
        icon: ChevronUp,
        category: "Higher Education"
      },
      {
        title: "Duolingo",
        description: "Language-learning platform that includes a language-learning website and app.",
        url: "https://www.duolingo.com",
        icon: ChevronUp,
        category: "Languages"
      }
    ]
  },
  entertainment: {
    title: "Entertainment",
    description: "Platforms for streaming music, videos, and other forms of entertainment.",
    sites: [
      {
        title: "Netflix",
        description: "Subscription-based streaming service offering movies and TV series.",
        url: "https://www.netflix.com",
        icon: ChevronLeft,
        category: "Streaming"
      },
      {
        title: "YouTube",
        description: "Video-sharing platform allowing users to upload, view, and share videos.",
        url: "https://www.youtube.com",
        icon: ChevronLeft,
        category: "Videos"
      },
      {
        title: "Spotify",
        description: "Digital music, podcast, and video streaming service with access to millions of songs.",
        url: "https://www.spotify.com",
        icon: ChevronLeft,
        category: "Music"
      },
      {
        title: "Twitch",
        description: "Live streaming service focusing on video game live streaming and esports competitions.",
        url: "https://www.twitch.tv",
        icon: ChevronLeft,
        category: "Live Streaming"
      }
    ]
  },
  news: {
    title: "News",
    description: "Stay updated with the latest happenings around the world.",
    sites: [
      {
        title: "BBC",
        description: "British public service broadcaster providing news, entertainment, and educational content.",
        url: "https://www.bbc.com",
        icon: ChevronDown,
        category: "International"
      },
      {
        title: "The New York Times",
        description: "American newspaper with worldwide influence and readership.",
        url: "https://www.nytimes.com",
        icon: ChevronDown,
        category: "Newspaper"
      },
      {
        title: "Reuters",
        description: "International news organization providing reporting from around the world.",
        url: "https://www.reuters.com",
        icon: ChevronDown,
        category: "Agency"
      },
      {
        title: "Al Jazeera",
        description: "Qatari state-owned news channel with a focus on international news.",
        url: "https://www.aljazeera.com",
        icon: ChevronDown,
        category: "International"
      }
    ]
  }
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate search by filtering through all sites
    const results: any[] = [];
    
    Object.values(navigationData).forEach(category => {
      category.sites.forEach(site => {
        if (
          site.title.toLowerCase().includes(term.toLowerCase()) ||
          site.description.toLowerCase().includes(term.toLowerCase()) ||
          (site.category && site.category.toLowerCase().includes(term.toLowerCase()))
        ) {
          results.push({
            ...site,
            categoryTitle: category.title
          });
        }
      });
    });
    
    setSearchResults(results);
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedLogo className="mb-8" />
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in">
              Your Gateway to the Web
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
              Discover and navigate to the best websites, tools, and resources across the internet.
            </p>
            
            <SearchBar 
              className="mb-8" 
              onSearch={handleSearch} 
            />
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        {/* Search results */}
        {isSearching && (
          <section className="py-8 border-y border-border">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
              <h2 className="text-2xl font-semibold mb-6">
                Search Results {searchResults.length > 0 ? `(${searchResults.length})` : ''}
              </h2>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {searchResults.map((site, index) => (
                    <NavCard
                      key={`search-${index}`}
                      title={site.title}
                      description={site.description}
                      url={site.url}
                      icon={site.icon}
                      category={`${site.categoryTitle} › ${site.category}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No results found. Try a different search term.</p>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Categories */}
        {!isSearching && (
          <>
            <CategorySection 
              title={navigationData.search.title}
              description={navigationData.search.description}
              sites={navigationData.search.sites}
            />
            
            <CategorySection 
              title={navigationData.social.title}
              description={navigationData.social.description}
              sites={navigationData.social.sites}
              className="bg-secondary/50"
            />
            
            <CategorySection 
              title={navigationData.productivity.title}
              description={navigationData.productivity.description}
              sites={navigationData.productivity.sites}
            />
            
            <CategorySection 
              title={navigationData.learning.title}
              description={navigationData.learning.description}
              sites={navigationData.learning.sites}
              className="bg-secondary/50"
            />
            
            <CategorySection 
              title={navigationData.entertainment.title}
              description={navigationData.entertainment.description}
              sites={navigationData.entertainment.sites}
            />
            
            <CategorySection 
              title={navigationData.news.title}
              description={navigationData.news.description}
              sites={navigationData.news.sites}
              className="bg-secondary/50"
            />
          </>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
