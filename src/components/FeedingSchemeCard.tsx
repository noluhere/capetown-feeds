import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Users, Navigation } from "lucide-react";

interface FeedingScheme {
  id: string;
  name: string;
  area: string;
  address: string;
  operatingHours: string;
  operatingDays: string;
  contact: string;
  targetAudience: string;
  foodType: string;
  status: 'active' | 'limited' | 'closed';
}

interface FeedingSchemeCardProps {
  scheme: FeedingScheme;
}

export const FeedingSchemeCard = ({ scheme }: FeedingSchemeCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success text-white';
      case 'limited':
        return 'bg-community text-white';
      case 'closed':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">{scheme.name}</CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {scheme.area}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(scheme.status)}>
            {scheme.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">
          {scheme.address}
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-community" />
          <span>{scheme.operatingDays} • {scheme.operatingHours}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-community" />
          <span>{scheme.contact}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-community" />
          <span>{scheme.targetAudience}</span>
        </div>
        
        <div className="pt-2 space-y-3">
          <Badge variant="secondary" className="text-xs">
            {scheme.foodType}
          </Badge>
          
          {/* Mobile-friendly action buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" className="bg-community hover:bg-community/90 text-primary-foreground">
              Get Directions
            </Button>
            <Button size="sm" variant="outline" className="border-community text-community hover:bg-community hover:text-primary-foreground">
              Contact Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};