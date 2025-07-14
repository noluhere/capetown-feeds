import { ExternalLink, Heart, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CurrentNeedCard } from "@/components/CurrentNeedCard";
import { CurrentNeed } from "@/data/currentNeeds";

interface DonationVolunteerTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  filteredNeeds: CurrentNeed[];
}

export const DonationVolunteerTabs = ({
  activeTab,
  onTabChange,
  filteredNeeds,
}: DonationVolunteerTabsProps) => {
  return (
    <section className="border-b bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Help Make a Difference
          </h2>
          <p className="text-muted-foreground">
            Support our community feeding schemes through donations or volunteering
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
            <TabsTrigger value="help" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Help
            </TabsTrigger>
            <TabsTrigger value="needs" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              What's Needed Now
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="help" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button 
                size="lg" 
                className="h-auto py-4 px-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQKVcHYJf7D--RcLzLPQ7O8W8YWX2O2hBKQFGJ8A4zFNz5RQ/viewform', '_blank')}
              >
                <div className="text-center">
                  <Heart className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">Donate Money</div>
                  <div className="text-sm opacity-90">Support our feeding schemes</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="h-auto py-4 px-6"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfQKVcHYJf7D--RcLzLPQ7O8W8YWX2O2hBKQFGJ8A4zFNz5RQ/viewform', '_blank')}
              >
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">Volunteer Time</div>
                  <div className="text-sm opacity-90">Help serve meals</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="needs" className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Urgent Community Needs
              </h3>
              <p className="text-muted-foreground text-sm">
                Current requests from our feeding schemes
              </p>
            </div>
            
            {filteredNeeds.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {filteredNeeds.map((need) => (
                  <CurrentNeedCard key={need.id} need={need} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No urgent needs at the moment</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};