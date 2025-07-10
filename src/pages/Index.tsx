import { useState, useMemo } from "react";
import { SearchSection } from "@/components/SearchSection";
import { FeedingSchemeCard } from "@/components/FeedingSchemeCard";
import { CurrentNeedCard } from "@/components/CurrentNeedCard";
import { feedingSchemes } from "@/data/feedingSchemes";
import { currentNeeds } from "@/data/currentNeeds";
import { Heart, MapPin, Clock, DollarSign, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-child-meal.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const [selectedNeedType, setSelectedNeedType] = useState("all");

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

  const filteredNeeds = useMemo(() => {
    return currentNeeds.filter((need) => {
      const matchesSearch = searchQuery === "" || 
        need.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        need.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        need.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesArea = selectedArea === "All Areas" || need.area === selectedArea;
      const matchesNeedType = selectedNeedType === "all" || need.type === selectedNeedType;

      return matchesSearch && matchesArea && matchesNeedType;
    });
  }, [searchQuery, selectedArea, selectedNeedType]);

  const activeSchemes = feedingSchemes.filter(scheme => scheme.status === 'active').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-community-light border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-community" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">DailyBread</h1>
              <p className="text-sm text-muted-foreground">Connecting communities with local feeding schemes</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
            onSearch={setSearchQuery}
            onAreaFilter={setSelectedArea}
            onNeedFilter={setSelectedNeedType}
            selectedArea={selectedArea}
            selectedNeedType={selectedNeedType}
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

      {/* Donate Section */}
      <section className="py-16 bg-gradient-to-r from-community-light to-warm-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Help Us Make a Difference
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Your support helps us maintain this directory and support feeding schemes across Cape Town. 
              Every contribution, whether time or money, helps feed families in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Donate Money */}
            <div className="bg-card rounded-lg p-8 shadow-lg text-center">
              <DollarSign className="h-12 w-12 text-community mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Donate Money</h4>
              <p className="text-muted-foreground mb-6">
                Help us maintain this platform and support feeding schemes with direct financial contributions.
              </p>
              <Button 
                className="w-full bg-community hover:bg-community/90 text-primary-foreground"
                onClick={() => window.open('https://forms.google.com/donate-money', '_blank')}
              >
                Make a Donation
              </Button>
            </div>
            
            {/* Volunteer Time */}
            <div className="bg-card rounded-lg p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-community mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-3">Volunteer Your Time</h4>
              <p className="text-muted-foreground mb-6">
                Join local feeding schemes as a volunteer. Help prepare meals, serve food, or assist with operations.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-community text-community hover:bg-community hover:text-primary-foreground"
                onClick={() => window.open('https://forms.google.com/volunteer-signup', '_blank')}
              >
                Find Volunteer Opportunities
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Together, we can ensure no one goes hungry in our community.
            </p>
          </div>
        </div>
      </section>

      {/* What's Needed Now Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="h-8 w-8 text-community" />
              <h3 className="text-3xl font-bold text-foreground">What's Needed Now</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Urgent needs from feeding schemes across Cape Town. Help make an immediate impact.
            </p>
          </div>

          {filteredNeeds.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No urgent needs found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNeeds.map((need) => (
                <CurrentNeedCard key={need.id} need={need} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {searchQuery || selectedArea !== "All Areas" 
                ? `Feeding Schemes (${filteredSchemes.length} found)` 
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
