import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { id: string; name: string; color: string }[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "px-6 py-2 rounded-xl transition-all duration-200 text-sm font-medium",
          activeCategory === null
            ? "bg-primary text-primary-foreground shadow-glow"
            : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card/80 backdrop-blur-sm border border-border/50"
        )}
      >
        All Apps
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-6 py-2 rounded-xl transition-all duration-200 text-sm font-medium",
            activeCategory === category.id
              ? `category-${category.id} text-white shadow-elegant`
              : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card/80 backdrop-blur-sm border border-border/50"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}