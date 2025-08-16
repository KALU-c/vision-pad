import { AppCard } from "@/components/AppCard";
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/categoryFilter";
import { ModeToggle } from "@/components/mode-toggle";
import { Layers, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const apps = [
  {
    id: "tldraw",
    name: "tldraw",
    description: "Infinite canvas drawing and diagramming tool with real-time collaboration",
    icon: "✏️",
    category: "drawing" as const,
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    description: "Virtual whiteboard for sketching hand-drawn like diagrams",
    icon: "🎨",
    category: "drawing" as const,
  },
  // {
  //   id: "figma",
  //   name: "Figma",
  //   description: "Collaborative interface design and prototyping platform",
  //   icon: "🎯",
  //   category: "design" as const,
  // },
  // {
  //   id: "notion",
  //   name: "Notion",
  //   description: "All-in-one workspace for notes, docs, and project management",
  //   icon: "📝",
  //   category: "productivity" as const,
  // },
  // {
  //   id: "vscode",
  //   name: "VS Code",
  //   description: "Powerful code editor with extensive extensions and debugging",
  //   icon: "💻",
  //   category: "development" as const,
  // },
  // {
  //   id: "linear",
  //   name: "Linear",
  //   description: "Modern issue tracking and project management for teams",
  //   icon: "⚡",
  //   category: "productivity" as const,
  // },
  // {
  //   id: "framer",
  //   name: "Framer",
  //   description: "Interactive design and prototyping with advanced animations",
  //   icon: "🎭",
  //   category: "design" as const,
  // },
  // {
  //   id: "github",
  //   name: "GitHub Desktop",
  //   description: "Simplified Git workflow with visual interface for repositories",
  //   icon: "🐙",
  //   category: "development" as const,
  // },
  // {
  //   id: "slack",
  //   name: "Slack",
  //   description: "Team communication and collaboration platform",
  //   icon: "💬",
  //   category: "productivity" as const,
  // },
];

const categories = [
  { id: "drawing", name: "Drawing", color: "drawing" },
  { id: "productivity", name: "Productivity", color: "productivity" },
  { id: "design", name: "Design", color: "design" },
  { id: "development", name: "Development", color: "development" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredApps = apps.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || app.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAppClick = (appId: string) => {
    console.log(`Opening ${appId}...`);
    // In a real app, this would launch the application
  };

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <Layers className="w-12 h-12 text-primary animate-float" />
                <div className="absolute inset-0 animate-glow rounded-full" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                AppSuite
              </h1>

              <ModeToggle />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your ultimate productivity hub. Access all your favorite tools in one beautiful,
              unified workspace designed for modern creators and builders.
            </p>

            {/* Feature highlights */}
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>All in One</span>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="space-y-6 mb-12">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search your apps..."
            />

            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app, index) => (
              <Link to={app.id}>
                <div
                  key={app.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AppCard
                    name={app.name}
                    description={app.description}
                    icon={app.icon}
                    category={app.category}
                    onClick={() => handleAppClick(app.id)}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredApps.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-card/50 flex items-center justify-center text-4xl">
                🔍
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No apps found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm">
              AppSuite • Your productivity, amplified
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;