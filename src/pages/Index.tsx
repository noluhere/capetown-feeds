import { useState, useMemo } from "react";
import { FeedingSchemeCard } from "@/components/FeedingSchemeCard";
import { AppHeader } from "@/components/AppHeader";
import { HeroSection } from "@/components/HeroSection";
import { DonationVolunteerTabs } from "@/components/DonationVolunteerTabs";
import { StatsSection } from "@/components/StatsSection";
import { AppFooter } from "@/components/AppFooter";
import { feedingSchemes } from "@/data/feedingSchemes";
import { currentNeeds } from "@/data/currentNeeds";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <HeroSection 
        onSearch={setSearchQuery}
        onAreaFilter={setSelectedArea}
        onNeedFilter={setSelectedNeedType}
        selectedArea={selectedArea}
        selectedNeedType={selectedNeedType}
      />

      <DonationVolunteerTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        filteredNeeds={filteredNeeds}
      />

      <StatsSection feedingSchemes={feedingSchemes} />

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

      <AppFooter />
    </div>
  );
};

export default Index;