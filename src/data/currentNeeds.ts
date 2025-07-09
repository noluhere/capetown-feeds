export interface CurrentNeed {
  id: string;
  title: string;
  location: string;
  area: string;
  type: 'volunteers' | 'donations' | 'supplies';
  urgency: 'low' | 'medium' | 'high';
  description: string;
  timeframe: string;
  contact: string;
  schemeId: string; // Links to feeding scheme
}

export const currentNeeds: CurrentNeed[] = [
  {
    id: "need-1",
    title: "Soup kitchen needs 3 volunteers this Saturday",
    location: "Khayelitsha Community Centre",
    area: "Khayelitsha",
    type: "volunteers",
    urgency: "high",
    description: "Help serve meals and distribute food packages to 200+ families",
    timeframe: "Saturday 9AM - 2PM",
    contact: "021 361 2001",
    schemeId: "scheme-1"
  },
  {
    id: "need-2", 
    title: "Urgent: Rice and vegetables needed",
    location: "Mitchells Plain Feeding Scheme",
    area: "Mitchells Plain",
    type: "donations",
    urgency: "high",
    description: "Running low on rice, vegetables and cooking oil for this week's meals",
    timeframe: "Needed by Wednesday",
    contact: "021 392 4567",
    schemeId: "scheme-2"
  },
  {
    id: "need-3",
    title: "Weekend food preparation volunteers",
    location: "Gugulethu Community Kitchen",
    area: "Gugulethu", 
    type: "volunteers",
    urgency: "medium",
    description: "Help prepare sandwiches and soup for Sunday distribution",
    timeframe: "Sunday 7AM - 12PM",
    contact: "021 637 8901",
    schemeId: "scheme-3"
  },
  {
    id: "need-4",
    title: "Winter blankets and warm clothing",
    location: "Langa Outreach Centre",
    area: "Langa",
    type: "supplies",
    urgency: "medium", 
    description: "Collecting warm clothing and blankets for the winter season",
    timeframe: "Ongoing collection",
    contact: "021 694 2345",
    schemeId: "scheme-4"
  },
  {
    id: "need-5",
    title: "Morning shift cooking volunteers needed",
    location: "Crossroads Community Centre",
    area: "Crossroads",
    type: "volunteers",
    urgency: "medium",
    description: "Early morning help needed to prepare breakfast for school children",
    timeframe: "Weekdays 6AM - 8AM", 
    contact: "021 633 5678",
    schemeId: "scheme-5"
  },
  {
    id: "need-6",
    title: "Bread and milk donations needed",
    location: "Nyanga Soup Kitchen",
    area: "Nyanga",
    type: "donations",
    urgency: "high",
    description: "Daily bread and fresh milk donations to supplement breakfast program",
    timeframe: "Daily deliveries needed",
    contact: "021 386 7890",
    schemeId: "scheme-6"
  }
];