export type Role = 'customer' | 'professional' | 'admin';

export type Profession = 
  | 'Dentist' 
  | 'Doctor' 
  | 'Psychologist' 
  | 'Barber' 
  | 'Hair Stylist' 
  | 'Colorist' 
  | 'Nail Technician' 
  | 'Makeup Artist' 
  | 'Beauty Salon' 
  | 'Tattoo Artist' 
  | 'Massage Therapist' 
  | 'Personal Trainer' 
  | 'Photographer' 
  | 'Consultant' 
  | 'Tutor' 
  | 'Car Service' 
  | 'Veterinary' 
  | 'Lawyer' 
  | 'Other';

export type SubscriptionPlan = 'free' | 'pro' | 'business' | 'enterprise';

export type SlotPrivacyMode = 'show_name' | 'show_initial' | 'show_avatar' | 'show_reserved_only';

export type DurationMinutes = 15 | 30 | 45 | 60 | 90 | 120;

export type TemplateTheme = 'minimal' | 'luxury' | 'medical' | 'beauty' | 'dark' | 'modern' | 'creative' | 'elegant';

export interface Service {
  id: string;
  name: string;
  duration: DurationMinutes;
  price: number; // in AZN
  category: string;
  color: string;
  description: string;
  preparationInstructions?: string;
  images?: string[];
}

export interface WorkingHours {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  isOpen: boolean;
  start: string; // e.g. "09:00"
  end: string;   // e.g. "18:00"
  lunchStart?: string; // e.g. "13:00"
  lunchEnd?: string;   // e.g. "14:00"
}

export interface CustomerProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  telegram?: string;
  avatar?: string;
  birthday?: string;
  notes?: string;
  totalVisits: number;
  completedVisits: number;
  cancelledVisits: number;
  noShowCount: number;
  lateCount: number;
  totalSpending: number;
  favoriteService?: string;
  lastVisit?: string;
  isBlacklisted: boolean;
  blacklistReason?: string;
}

export interface Booking {
  id: string;
  professionalId: string;
  serviceId: string;
  serviceName: string;
  price: number;
  duration: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  customerName: string;
  customerPhone: string;
  customerTelegram?: string;
  customerEmail: string;
  customerAvatar?: string;
  notes?: string;
  status: 'pending' | 'arrived' | 'completed' | 'late' | 'cancelled' | 'no_show';
  createdAt: string;
}

export interface WaitlistEntry {
  id: string;
  professionalId: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerTelegram?: string;
  status: 'waiting' | 'notified' | 'accepted' | 'declined';
  createdAt: string;
}

export interface Review {
  id: string;
  professionalId: string;
  customerName: string;
  customerAvatar?: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  images?: string[];
  reply?: {
    comment: string;
    date: string;
  };
}

export interface PageCustomization {
  template: TemplateTheme;
  primaryColor: string;
  accentColor: string;
  fontFamily: string;
  buttonStyle: 'rounded' | 'pill' | 'sharp';
  backgroundStyle: 'clean' | 'gradient' | 'glassmorphism' | 'dark_luxury';
  headerStyle: 'classic' | 'centered' | 'card_hero';
  galleryLayout: 'grid' | 'masonry' | 'carousel';
  calendarStyle: 'compact' | 'expanded' | 'time_grid';
  showSlotPrivacy: SlotPrivacyMode;
  customLogoUrl?: string;
  bannerUrl?: string;
  profileLayout: 'left_avatar' | 'top_avatar' | 'badge_avatar';
}

export interface Professional {
  id: string;
  slug: string; // e.g. "dr-nicat"
  fullName: string;
  profession: Profession;
  businessName: string;
  email: string;
  phone: string;
  telegram?: string;
  profilePhoto: string;
  coverPhoto: string;
  about: string;
  workingAddress: string;
  city: string; // e.g. "Baku"
  district: string; // e.g. "Nəsimi"
  latitude: number;
  longitude: number;
  website?: string;
  instagram?: string;
  facebook?: string;
  workingHours: WorkingHours[];
  languages: string[];
  experienceYears: number;
  certificates: string[];
  gallery: string[];
  rating: number;
  reviewCount: number;
  services: Service[];
  customization: PageCustomization;
  subscription: SubscriptionPlan;
  isApproved: boolean;
  isSuspended: boolean;
  googleCalendarConnected: boolean;
  telegramBotConnected: boolean;
  vacationDays: string[]; // dates YYYY-MM-DD
  blockedHours: { date: string; time: string }[];
}

export interface AdminStats {
  totalProfessionals: number;
  pendingApprovals: number;
  totalBookings: number;
  totalRevenueAZN: number;
  mrrAZN: number;
  activeWaitlists: number;
}
