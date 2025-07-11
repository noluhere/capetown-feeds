import { MapPin, Clock, Heart } from "lucide-react";
import { FeedingScheme } from "@/data/feedingSchemes";

interface StatsSectionProps {
  feedingSchemes: FeedingScheme[];
}

export const StatsSection = ({ feedingSchemes }: StatsSectionProps) => {
  const activeSchemes = feedingSchemes.filter(scheme => scheme.status === 'active').length;

  return (
    <section className="py-8 bg-warm-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="h-6 w-6 text-community" />
            <div>
              <div className="text-2xl font-bold text-foreground">{feedingSchemes.length}</div>
              <div className="text-sm text-muted-foreground">Total Schemes</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Clock className="h-6 w-6 text-success" />
            <div>
              <div className="text-2xl font-bold text-foreground">{activeSchemes}</div>
              <div className="text-sm text-muted-foreground">Currently Active</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-6 w-6 text-community" />
            <div>
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Areas Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};