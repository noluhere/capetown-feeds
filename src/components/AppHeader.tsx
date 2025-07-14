import { Heart } from "lucide-react";

export const AppHeader = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-community" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">DailyBread</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Community Feeding Schemes in Cape Town
          </p>
        </div>
      </div>
    </header>
  );
};