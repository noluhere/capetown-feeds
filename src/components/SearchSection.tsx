import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Users, Heart } from "lucide-react";

interface SearchSectionProps {
  onSearch: (query: string) => void;
  onAreaFilter: (area: string) => void;
  onNeedFilter: (type: string) => void;
  selectedArea: string;
  selectedNeedType: string;
}

const capeAreasList = [
  "All Areas",
  "City Bowl",
  "Atlantic Seaboard", 
  "Southern Suburbs",
  "Northern Suburbs",
  "Cape Flats",
  "Helderberg",
  "West Coast",
  "Bellville",
  "Mitchell's Plain",
  "Khayelitsha",
  "Gugulethu",
  "Langa",
  "Nyanga",
  "Philippi",
  "Delft",
  "Bishop Lavis",
  "Manenberg",
  "Hanover Park"
];

const needTypes = [
  { value: "all", label: "All Needs" },
  { value: "volunteers", label: "Needs Volunteers", icon: Users },
  { value: "donations", label: "Accepting Donations", icon: Heart }
];

export const SearchSection = ({ onSearch, onAreaFilter, onNeedFilter, selectedArea, selectedNeedType }: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for feeding schemes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-10"
            />
          </div>
          
          <Button onClick={handleSearch} className="sm:w-auto">
            Search
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Select value={selectedArea} onValueChange={onAreaFilter}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                {capeAreasList.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Select value={selectedNeedType} onValueChange={onNeedFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by need type" />
              </SelectTrigger>
              <SelectContent>
                {needTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      {type.icon && <type.icon className="h-4 w-4" />}
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};