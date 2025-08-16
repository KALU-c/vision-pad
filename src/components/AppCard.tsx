import { ExternalLink } from "lucide-react";

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  category: "drawing" | "productivity" | "design" | "development";
  onClick?: () => void;
}

export function AppCard({ name, description, icon, category, onClick }: AppCardProps) {
  return (
    <div
      className="group relative gradient-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
      onClick={onClick}
    >
      {/* Category indicator */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full category-${category}`} />

      {/* App icon */}
      <div className="mb-4 relative">
        <div className="w-16 h-16 rounded-xl bg-card/50 flex items-center justify-center text-3xl backdrop-blur-sm border border-border/50 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* App info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
    </div>
  );
}