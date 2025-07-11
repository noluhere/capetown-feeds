import { useState } from "react";
import { Heart, DollarSign, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrentNeedCard } from "@/components/CurrentNeedCard";
import { CurrentNeed } from "@/data/currentNeeds";

interface AppHeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  filteredNeeds: CurrentNeed[];
}

export const AppHeader = ({ activeTab, onTabChange, filteredNeeds }: AppHeaderProps) => {
  return (
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
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full mt-6">
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
  );
};