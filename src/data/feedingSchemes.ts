export interface FeedingScheme {
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

export const feedingSchemes: FeedingScheme[] = [
  {
    id: "1",
    name: "Woodstock Community Kitchen",
    area: "City Bowl",
    address: "45 Victoria Road, Woodstock",
    operatingHours: "12:00 PM - 2:00 PM",
    operatingDays: "Monday - Friday",
    contact: "021 447 9326",
    targetAudience: "General public",
    foodType: "Hot meals",
    status: "active"
  },
  {
    id: "2", 
    name: "Khayelitsha Soup Kitchen",
    area: "Khayelitsha",
    address: "Site C Community Hall, Khayelitsha",
    operatingHours: "11:00 AM - 1:00 PM",
    operatingDays: "Daily",
    contact: "021 361 8945",
    targetAudience: "Children & families",
    foodType: "Soup & bread",
    status: "active"
  },
  {
    id: "3",
    name: "Salt River Hope Center",
    area: "City Bowl", 
    address: "78 Voortrekker Road, Salt River",
    operatingHours: "6:00 PM - 8:00 PM",
    operatingDays: "Tuesday, Thursday, Saturday",
    contact: "021 448 7532",
    targetAudience: "Homeless individuals",
    foodType: "Hot meals & sandwiches",
    status: "active"
  },
  {
    id: "4",
    name: "Mitchell's Plain Community Center",
    area: "Mitchell's Plain",
    address: "AZ Berman Drive, Mitchell's Plain",
    operatingHours: "1:00 PM - 3:00 PM",
    operatingDays: "Monday, Wednesday, Friday",
    contact: "021 392 6471",
    targetAudience: "Elderly & children",
    foodType: "Lunch packs",
    status: "limited"
  },
  {
    id: "5",
    name: "Gugulethu United Church",
    area: "Gugulethu",
    address: "NY 108 Gugulethu Community Church",
    operatingHours: "10:00 AM - 12:00 PM",
    operatingDays: "Sunday",
    contact: "021 633 9847",
    targetAudience: "General public",
    foodType: "Sunday meals",
    status: "active"
  },
  {
    id: "6",
    name: "Langa Heritage Foundation",
    area: "Langa",
    address: "Joe Slovo Community Hall, Langa",
    operatingHours: "12:30 PM - 2:30 PM",
    operatingDays: "Monday - Saturday",
    contact: "021 694 5738",
    targetAudience: "Children & youth",
    foodType: "Nutritious meals",
    status: "active"
  },
  {
    id: "7",
    name: "Bellville Care Center",
    area: "Bellville",
    address: "23 Durban Road, Bellville",
    operatingHours: "11:30 AM - 1:30 PM",
    operatingDays: "Weekdays",
    contact: "021 948 6529",
    targetAudience: "Unemployed adults",
    foodType: "Soup & bread",
    status: "limited"
  },
  {
    id: "8",
    name: "Nyanga Community Kitchen",
    area: "Nyanga",
    address: "Zwelitsha Primary School, Nyanga",
    operatingHours: "12:00 PM - 2:00 PM",
    operatingDays: "Monday, Wednesday, Friday",
    contact: "021 386 2947",
    targetAudience: "School children",
    foodType: "School meals",
    status: "active"
  },
  {
    id: "9",
    name: "Hanover Park Outreach",
    area: "Hanover Park",
    address: "Hanover Park Community Center",
    operatingHours: "5:00 PM - 7:00 PM",
    operatingDays: "Tuesday & Thursday",
    contact: "021 637 8521",
    targetAudience: "Families in need",
    foodType: "Family meals",
    status: "active"
  },
  {
    id: "10",
    name: "Philippi Hope Kitchen",
    area: "Philippi",
    address: "Browns Farm Community Hall",
    operatingHours: "1:00 PM - 3:00 PM",
    operatingDays: "Monday, Thursday, Saturday",
    contact: "021 371 4682",
    targetAudience: "General community",
    foodType: "Hot meals",
    status: "limited"
  },
  {
    id: "11",
    name: "Manenberg Unity Kitchen",
    area: "Manenberg", 
    address: "Rio Grande Primary School",
    operatingHours: "12:00 PM - 1:30 PM",
    operatingDays: "Weekdays",
    contact: "021 699 3847",
    targetAudience: "Students & families",
    foodType: "Lunch meals",
    status: "active"
  },
  {
    id: "12",
    name: "Bishop Lavis Community Aid",
    area: "Bishop Lavis",
    address: "Bishop Lavis Community Center",
    operatingHours: "11:00 AM - 1:00 PM",
    operatingDays: "Monday - Friday",
    contact: "021 934 7265",
    targetAudience: "All ages",
    foodType: "Daily meals",
    status: "active"
  }
];