import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, AlertCircle, Users, Heart, Package } from "lucide-react";
import { CurrentNeed } from "@/data/currentNeeds";

interface CurrentNeedCardProps {
  need: CurrentNeed;
}

export const CurrentNeedCard = ({ need }: CurrentNeedCardProps) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-community text-white';
      case 'low':
        return 'bg-success text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'volunteers':
        return Users;
      case 'donations':
        return Heart;
      case 'supplies':
        return Package;
      default:
        return AlertCircle;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'volunteers':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'donations':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'supplies':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getActionText = (type: string) => {
    switch (type) {
      case 'volunteers':
        return 'Sign up to help';
      case 'donations':
        return 'Donate now';
      case 'supplies':
        return 'Contribute items';
      default:
        return 'Get involved';
    }
  };

  const TypeIcon = getTypeIcon(need.type);

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg border-l-4 border-l-community">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">{need.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {need.area}
            </CardDescription>
          </div>
          <Badge className={getUrgencyColor(need.urgency)}>
            {need.urgency} priority
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {need.location}
        </div>

        <Badge variant="outline" className={getTypeColor(need.type)}>
          <TypeIcon className="h-3 w-3 mr-1" />
          {need.type}
        </Badge>
        
        <p className="text-sm text-foreground">
          {need.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-community" />
          <span>{need.timeframe}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-community" />
          <span>{need.contact}</span>
        </div>
        
        <Button className="w-full bg-community hover:bg-community/90 text-primary-foreground">
          {getActionText(need.type)}
        </Button>
      </CardContent>
    </Card>
  );
};