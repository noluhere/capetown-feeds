import { useState, useMemo } from "react";
import { SearchSection } from "@/components/SearchSection";
import { FeedingSchemeCard } from "@/components/FeedingSchemeCard";
import { feedingSchemes } from "@/data/feedingSchemes";
import { Heart, MapPin, Clock } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const filteredSchemes = useMemo(() => {
    return feedingSchemes.filter((scheme) => {
      const matchesSearch = searchQuery === "" || 
        scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesArea = selectedArea === "All Areas" || scheme.area === selectedArea;

      return matchesSearch && matchesArea;
    });
  }, [searchQuery, selectedArea]);

  const activeSchemes = feedingSchemes.filter(scheme => scheme.status === 'active').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-community-light border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-community" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Cape Town Feeds Finder</h1>
              <p className="text-sm text-muted-foreground">Connecting communities with local feeding schemes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-community-light to-background py-12">
        <div className="container mx-auto px-4">
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
            onSearch={setSearchQuery}
            onAreaFilter={setSelectedArea}
            selectedArea={selectedArea}
          />
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {searchQuery || selectedArea !== "All Areas" 
                ? `Search Results (${filteredSchemes.length} found)` 
                : "All Feeding Schemes"}
            </h3>
            {filteredSchemes.length === 0 && (
              <p className="text-muted-foreground">
                No feeding schemes found matching your criteria. Try adjusting your search or area filter.
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <FeedingSchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            This directory is maintained to help connect communities with local food support services.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            If you know of a feeding scheme that should be listed, please contact your local community organization.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
