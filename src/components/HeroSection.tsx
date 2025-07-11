import { SearchSection } from "@/components/SearchSection";
import heroImage from "@/assets/hero-child-meal.jpg";

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onAreaFilter: (area: string) => void;
  onNeedFilter: (needType: string) => void;
  selectedArea: string;
  selectedNeedType: string;
}

export const HeroSection = ({ 
  onSearch, 
  onAreaFilter, 
  onNeedFilter, 
  selectedArea, 
  selectedNeedType 
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-b from-community-light to-background py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Child receiving a warm meal"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-community-light/80 to-background/80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Feeding Schemes Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Access information about community feeding schemes across Cape Town. Find operating hours, 
            locations, and contact details to connect with local food support services.
          </p>
        </div>
        
        <SearchSection 
          onSearch={onSearch}
          onAreaFilter={onAreaFilter}
          onNeedFilter={onNeedFilter}
          selectedArea={selectedArea}
          selectedNeedType={selectedNeedType}
        />
      </div>
    </section>
  );
};