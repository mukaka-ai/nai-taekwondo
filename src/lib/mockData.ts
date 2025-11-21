// Mock data to replace Firebase/Supabase backend
// This file contains all the data that would normally come from a database

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface Registration {
  id?: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  class: string;
  message?: string;
}

// Mock Coaches Data
export const mockCoaches: Coach[] = [
  {
    id: "1",
    name: "Grand Master Lee",
    role: "Chief Instructor",
    bio: "7th Dan Black Belt with over 30 years of experience. Former Olympic coach and international referee.",
    photoUrl: "/src/assets/grand-master-lee-real.jpg",
  },
  {
    id: "2",
    name: "Coach Aloice",
    role: "Senior Instructor",
    bio: "5th Dan Black Belt specializing in competitive training and self-defense techniques.",
    photoUrl: "/src/assets/profile-aloice.jpeg",
  },
  {
    id: "3",
    name: "Coach Sharma",
    role: "Kids Instructor",
    bio: "4th Dan Black Belt with expertise in teaching children and youth development programs.",
    photoUrl: "/src/assets/coach sharma.jpeg",
  },
  {
    id: "4",
    name: "Coach Obonjo",
    role: "Assistant Instructor",
    bio: "3rd Dan Black Belt focusing on fitness and conditioning for martial arts.",
    photoUrl: "/src/assets/coach obonjo.jpeg",
  },
];

// Mock Events Data
export const mockEvents: Event[] = [
  {
    id: "1",
    title: "National Championship 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Kasarani Stadium, Nairobi",
    description: "Annual national taekwondo championship featuring competitors from across Kenya.",
    category: "Competition",
  },
  {
    id: "2",
    title: "Belt Grading Ceremony",
    date: "2024-02-20",
    time: "02:00 PM",
    location: "Nairobi TKD Academy",
    description: "Quarterly belt grading for all students. Students will demonstrate their skills and progress.",
    category: "Grading",
  },
  {
    id: "3",
    title: "Self-Defense Workshop",
    date: "2024-02-28",
    time: "10:00 AM",
    location: "Nairobi TKD Academy",
    description: "Special workshop focusing on practical self-defense techniques for everyday situations.",
    category: "Workshop",
  },
  {
    id: "4",
    title: "Inter-Schools Tournament",
    date: "2024-04-10",
    time: "08:00 AM",
    location: "Moi International Sports Centre",
    description: "Tournament for school-aged students across Nairobi region.",
    category: "Competition",
  },
];

// Mock Announcements Data
export const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "New Training Schedule",
    description: "Starting February 1st, we will have additional evening classes on Wednesdays from 6-7 PM for adults.",
    date: "2024-01-25",
    category: "Schedule",
  },
  {
    id: "2",
    title: "Registration Open for Spring Session",
    description: "Registration is now open for our Spring 2024 session. Early bird discount available until February 15th!",
    date: "2024-01-20",
    category: "Registration",
  },
  {
    id: "3",
    title: "Equipment Sale",
    description: "We have a special sale on training equipment this month. 20% off all protective gear and uniforms.",
    date: "2024-01-15",
    category: "Sale",
  },
];

// Mock Gallery Images Data
export const mockGalleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "/src/assets/training-aloice-real.jpg",
    caption: "Training session with Coach Aloice",
    category: "Training",
  },
  {
    id: "2",
    url: "/src/assets/tournament-real.jpg",
    caption: "Students competing at regional tournament",
    category: "Competitions",
  },
  {
    id: "3",
    url: "/src/assets/interschools-real.jpg",
    caption: "Inter-schools championship 2023",
    category: "Competitions",
  },
  {
    id: "4",
    url: "/src/assets/swift-team-real.jpg",
    caption: "Swift Taekwondo Team",
    category: "Team",
  },
  {
    id: "5",
    url: "/src/assets/national-olympic-real.jpg",
    caption: "National Olympic Committee visit",
    category: "Events",
  },
  {
    id: "6",
    url: "/src/assets/international-tournament-real.jpg",
    caption: "International tournament participation",
    category: "Competitions",
  },
];

// Mock function to simulate async data fetching
export const fetchMockData = <T,>(data: T[], delay: number = 500): Promise<T[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Mock function to simulate saving data
export const saveMockData = <T,>(data: T, delay: number = 300): Promise<{ success: boolean; data: T }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mock data saved:", data);
      resolve({ success: true, data });
    }, delay);
  });
};
