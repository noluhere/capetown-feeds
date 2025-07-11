import { useState, useMemo } from "react";
import { SearchSection } from "@/components/SearchSection";
import { FeedingSchemeCard } from "@/components/FeedingSchemeCard";
import { CurrentNeedCard } from "@/components/CurrentNeedCard";
import { feedingSchemes } from "@/data/feedingSchemes";
import { currentNeeds } from "@/data/currentNeeds";
import { Heart, MapPin, Clock, DollarSign, Users, AlertCircle, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import heroImage from "@/assets/hero-child-meal.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");
  const [selectedNeedType, setSelectedNeedType] = useState("all");
  const [schemesExpanded, setSchemesExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("help");

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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-community" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">DailyBread</h1>
                <p className="text-sm text-muted-foreground">Connecting communities with local feeding schemes</p>
              </div>
            </div>
          </div>
          
          {/* Consolidated Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-6">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="help" className="text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden sm:inline">Help Make a Difference</span>
                  <span className="sm:hidden">Help</span>
                </TabsTrigger>
                <TabsTrigger value="needs" className="text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden sm:inline">What's Needed Now</span>
                  <span className="sm:hidden">Needs</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="help" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
                {/* Donate Money */}
                <div className="bg-card rounded-lg p-4 md:p-6 shadow-lg text-center">
                  <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-community mx-auto mb-3" />
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">Donate Money</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help us maintain this platform and support feeding schemes with direct financial contributions.
                  </p>
                  <Button 
                    size="sm"
                    className="w-full bg-community hover:bg-community/90 text-primary-foreground"
                    onClick={() => window.open('https://forms.google.com/donate-money', '_blank')}
                  >
                    Make a Donation
                  </Button>
                </div>
                
                {/* Volunteer Time */}
                <div className="bg-card rounded-lg p-4 md:p-6 shadow-lg text-center">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-community mx-auto mb-3" />
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">Volunteer Your Time</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join local feeding schemes as a volunteer. Help prepare meals, serve food, or assist with operations.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-community text-community hover:bg-community hover:text-primary-foreground"
                    onClick={() => window.open('https://forms.google.com/volunteer-signup', '_blank')}
                  >
                    Find Volunteer Opportunities
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="needs" className="mt-0">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-community" />
                  <h4 className="text-lg md:text-xl font-bold text-foreground">Urgent Needs</h4>
                </div>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Help make an immediate impact by addressing these urgent needs from feeding schemes across Cape Town.
                </p>
              </div>

              {filteredNeeds.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-muted-foreground">
                    No urgent needs found matching your criteria. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredNeeds.map((need) => (
                    <CurrentNeedCard key={need.id} need={need} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
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

      {/* Collapsible Feeding Schemes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Collapsible open={schemesExpanded} onOpenChange={setSchemesExpanded}>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-xl md:text-2xl font-semibold text-foreground hover:bg-transparent p-0 h-auto flex items-center gap-2 justify-start"
                  >
                    {schemesExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                    {searchQuery || selectedArea !== "All Areas" 
                      ? `Feeding Schemes (${filteredSchemes.length} found)` 
                      : "All Feeding Schemes"}
                  </Button>
                </CollapsibleTrigger>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-community text-community hover:bg-community hover:text-primary-foreground flex items-center gap-2"
                  onClick={() => window.open('https://forms.google.com/submit-scheme', '_blank')}
                >
                  <Plus className="h-4 w-4" />
                  Submit a Scheme
                </Button>
              </div>
            </div>
            
            <CollapsibleContent className="space-y-6">
              {filteredSchemes.length === 0 ? (
                <p className="text-muted-foreground">
                  No feeding schemes found matching your criteria. Try adjusting your search or area filter.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSchemes.map((scheme) => (
                    <FeedingSchemeCard key={scheme.id} scheme={scheme} />
                  ))}
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
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
