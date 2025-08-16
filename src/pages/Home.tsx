import { AppCard } from "@/components/AppCard";
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/categoryFilter";
import { useState } from "react";
import { Link } from "react-router";

const apps = [
  {
    id: "tldraw",
    name: "tldraw",
    description: "Infinite canvas drawing and diagramming tool with real-time collaboration",
    icon: "/tldraw.png",
    category: "drawing" as const,
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    description: "Virtual whiteboard for sketching hand-drawn like diagrams",
    icon: "/excalidraw.png",
    category: "drawing" as const,
  },
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


  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">

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
        </div>
      </div>
    </main>
  );
};

export default Home;