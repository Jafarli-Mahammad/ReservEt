import { Professional, Booking, CustomerProfile, Review, WaitlistEntry } from '../types';

export const INITIAL_PROFESSIONALS: Professional[] = [
  {
    id: 'pro-1',
    slug: 'dr-nicat',
    fullName: 'Dr. Nicat Məmmədov',
    profession: 'Dentist',
    businessName: 'Nicat Dental Studio & Implant Center',
    email: 'dr.nicat@rezerv.az',
    phone: '+994 50 211 44 88',
    telegram: 'dr_nicat_dental',
    profilePhoto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    coverPhoto: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    about: 'Almaniya və Türkiyədə ixtisas keçmiş estetik stomatoloq və implantoloq. 12 ildən çox iş təcrübəsi. Ağrısız müalicə, hollywood təbəssümü və diş implantasiyası üzrə mütəxəssis.',
    workingAddress: 'Nizami küç. 142, Port Baku yaxınlığı, Bakı',
    city: 'Bakı',
    district: 'Nəsimi',
    latitude: 40.3772,
    longitude: 49.8541,
    website: 'https://nicatdental.az',
    instagram: 'dr.nicat.dental',
    facebook: 'drnicatdental',
    workingHours: [
      { day: 'monday', isOpen: true, start: '09:00', end: '18:00', lunchStart: '13:00', lunchEnd: '14:00' },
      { day: 'tuesday', isOpen: true, start: '09:00', end: '18:00', lunchStart: '13:00', lunchEnd: '14:00' },
      { day: 'wednesday', isOpen: true, start: '09:00', end: '18:00', lunchStart: '13:00', lunchEnd: '14:00' },
      { day: 'thursday', isOpen: true, start: '09:00', end: '18:00', lunchStart: '13:00', lunchEnd: '14:00' },
      { day: 'friday', isOpen: true, start: '09:00', end: '18:00', lunchStart: '13:00', lunchEnd: '14:00' },
      { day: 'saturday', isOpen: true, start: '10:00', end: '15:00' },
      { day: 'sunday', isOpen: false, start: '09:00', end: '18:00' },
    ],
    languages: ['Azərbaycan', 'English', 'Русский'],
    experienceYears: 12,
    certificates: [
      'Master of Aesthetic Dentistry - Charité Berlin',
      'International Implantology Certificate - Istanbul University'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.95,
    reviewCount: 128,
    services: [
      {
        id: 'srv-101',
        name: 'Konsultasiya və Rəqəmsal Müayinə',
        duration: 30,
        price: 30,
        category: 'Müayinə',
        color: '#3B82F6',
        description: 'Dişlərin 3D skan olunması və hərtərəfli konsultasiya.',
        preparationInstructions: 'Müayinədən 1 saat əvvəl qida qəbul etməmək tövsiyə olunur.'
      },
      {
        id: 'srv-102',
        name: 'Peşəkar Diş Təmizlənməsi (AirFlow)',
        duration: 45,
        price: 80,
        category: 'Gigiyena',
        color: '#10B981',
        description: 'Ultrasonik və AirFlow vasitəsilə ərplərin tam təmizlənməsi.',
        preparationInstructions: 'Xüsusi hazırlıq tələb olunmur.'
      },
      {
        id: 'srv-103',
        name: 'Hollywood Smile Vinir / Keramika',
        duration: 60,
        price: 350,
        category: 'Estetika',
        color: '#8B5CF6',
        description: 'Ultra nazik premium Alman keramika vinirləri.',
        preparationInstructions: 'Əvvəlcədən konsultasiya olunması mütləqdir.'
      },
      {
        id: 'srv-104',
        name: 'İmplantasiya (Straumann / Megagen)',
        duration: 90,
        price: 600,
        category: 'Cərrahiyyə',
        color: '#EC4899',
        description: 'Ömürlük zəmanətli İsveçrə implantı.',
        preparationInstructions: 'Aç qarına gəlmək tövsiyə olunur.'
      }
    ],
    customization: {
      template: 'medical',
      primaryColor: '#0EA5E9',
      accentColor: '#38BDF8',
      fontFamily: 'Inter',
      buttonStyle: 'rounded',
      backgroundStyle: 'clean',
      headerStyle: 'classic',
      galleryLayout: 'grid',
      calendarStyle: 'time_grid',
      showSlotPrivacy: 'show_initial',
      profileLayout: 'left_avatar'
    },
    subscription: 'business',
    isApproved: true,
    isSuspended: false,
    googleCalendarConnected: true,
    telegramBotConnected: true,
    vacationDays: ['2026-08-01', '2026-08-02'],
    blockedHours: [{ date: '2026-07-25', time: '11:00' }]
  },
  {
    id: 'pro-2',
    slug: 'barber-emin',
    fullName: 'Emin Əliyev',
    profession: 'Barber',
    businessName: 'Gentlemen Craft Barbershop',
    email: 'emin.barber@rezerv.az',
    phone: '+994 55 999 12 34',
    telegram: 'barber_emin_baku',
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    coverPhoto: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200',
    about: '10 illik təcrübəyə malik usta bərbər. Fade saç kəsimi, saqqal formalaşdırılması və VIP üz baxımı servisləri.',
    workingAddress: 'Təbriz küç. 44, Nərimanov rayonu, Bakı',
    city: 'Bakı',
    district: 'Nərimanov',
    latitude: 40.3985,
    longitude: 49.8710,
    website: 'https://gentlemencraft.az',
    instagram: 'barber.emin.craft',
    workingHours: [
      { day: 'monday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'tuesday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'wednesday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'thursday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'friday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'saturday', isOpen: true, start: '10:00', end: '20:00' },
      { day: 'sunday', isOpen: true, start: '11:00', end: '18:00' },
    ],
    languages: ['Azərbaycan', 'Русский'],
    experienceYears: 10,
    certificates: ['Wahl Master Barber Academy Diploma', 'BarberExpo London 2022 Award'],
    gallery: [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.98,
    reviewCount: 215,
    services: [
      {
        id: 'srv-201',
        name: 'Saç Kəsimi & Yuma (Fade / Classic)',
        duration: 45,
        price: 25,
        category: 'Saç',
        color: '#F59E0B',
        description: 'Üz formanıza uyğun saç kəsimi, yuma və stajlinq.'
      },
      {
        id: 'srv-202',
        name: 'Saqqal Düzəldilməsi & Qaynar Dəsmal Spası',
        duration: 30,
        price: 15,
        category: 'Saqqal',
        color: '#10B981',
        description: 'Jiletlə dəqiq kontur və nəmləndirici qaynar dəsmal masajı.'
      },
      {
        id: 'srv-203',
        name: 'VIP Kompleks (Saç + Saqqal + Üz Maskası)',
        duration: 90,
        price: 45,
        category: 'VIP',
        color: '#6366F1',
        description: 'Tam yenilənmə paketi: saç, saqqal, qara maska və buxar baxımı.'
      }
    ],
    customization: {
      template: 'luxury',
      primaryColor: '#D97706',
      accentColor: '#F59E0B',
      fontFamily: 'Inter',
      buttonStyle: 'sharp',
      backgroundStyle: 'dark_luxury',
      headerStyle: 'card_hero',
      galleryLayout: 'masonry',
      calendarStyle: 'expanded',
      showSlotPrivacy: 'show_name',
      profileLayout: 'badge_avatar'
    },
    subscription: 'pro',
    isApproved: true,
    isSuspended: false,
    googleCalendarConnected: true,
    telegramBotConnected: true,
    vacationDays: [],
    blockedHours: []
  },
  {
    id: 'pro-3',
    slug: 'nail-ayten',
    fullName: 'Aytən Qasımova',
    profession: 'Nail Technician',
    businessName: 'Ayten Nail Couture',
    email: 'ayten.nail@rezerv.az',
    phone: '+994 70 888 77 11',
    telegram: 'ayten_nail_art',
    profilePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    coverPhoto: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1200',
    about: 'Aparat manikürü, pedikür, dırnaq qaynağı və fərdi dizaynlar. Yüksək sterilizasiya standartları.',
    workingAddress: '28 May küç. 18, Səbail rayonu, Bakı',
    city: 'Bakı',
    district: 'Səbail',
    latitude: 40.3750,
    longitude: 49.8430,
    instagram: 'ayten.nail.couture',
    workingHours: [
      { day: 'monday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'tuesday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'wednesday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'thursday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'friday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'saturday', isOpen: true, start: '10:00', end: '19:00' },
      { day: 'sunday', isOpen: false, start: '10:00', end: '19:00' },
    ],
    languages: ['Azərbaycan', 'Русский'],
    experienceYears: 7,
    certificates: ['Luxio Certified Master', 'Smart Pedicure Specialist'],
    gallery: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.92,
    reviewCount: 94,
    services: [
      {
        id: 'srv-301',
        name: 'Aparat Manikürü + Şellak (Gel-Polish)',
        duration: 60,
        price: 35,
        category: 'Manikür',
        color: '#EC4899',
        description: 'Təmiz aparat manikürü, dırnaq bərkidilməsi və Luxio örtüyü.'
      },
      {
        id: 'srv-302',
        name: 'Dırnaq Qaynağı (Gel Extension)',
        duration: 120,
        price: 60,
        category: 'Qaynaq',
        color: '#8B5CF6',
        description: 'Forma üzərində gel ilə dırnaq uzadılması və fransız dizaynı.'
      }
    ],
    customization: {
      template: 'beauty',
      primaryColor: '#EC4899',
      accentColor: '#F472B6',
      fontFamily: 'Inter',
      buttonStyle: 'pill',
      backgroundStyle: 'gradient',
      headerStyle: 'centered',
      galleryLayout: 'carousel',
      calendarStyle: 'compact',
      showSlotPrivacy: 'show_avatar',
      profileLayout: 'top_avatar'
    },
    subscription: 'pro',
    isApproved: true,
    isSuspended: false,
    googleCalendarConnected: true,
    telegramBotConnected: true,
    vacationDays: [],
    blockedHours: []
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'b-1001',
    professionalId: 'pro-1',
    serviceId: 'srv-101',
    serviceName: 'Konsultasiya və Rəqəmsal Müayinə',
    price: 30,
    duration: 30,
    date: '2026-07-24',
    time: '10:00',
    customerName: 'Kamran Rəhimov',
    customerPhone: '+994 50 333 22 11',
    customerTelegram: 'kamran_r',
    customerEmail: 'kamran@gmail.com',
    notes: 'Alt dişdə yüngül həssaslıq var.',
    status: 'arrived',
    createdAt: '2026-07-23T10:00:00Z'
  },
  {
    id: 'b-1002',
    professionalId: 'pro-1',
    serviceId: 'srv-102',
    serviceName: 'Peşəkar Diş Təmizlənməsi (AirFlow)',
    price: 80,
    duration: 45,
    date: '2026-07-24',
    time: '14:00',
    customerName: 'Leyla Əhmədova',
    customerPhone: '+994 55 444 55 66',
    customerEmail: 'leyla.a@mail.ru',
    notes: 'Qəhvə ləkələrinin təmizlənməsi.',
    status: 'pending',
    createdAt: '2026-07-23T12:30:00Z'
  },
  {
    id: 'b-1003',
    professionalId: 'pro-2',
    serviceId: 'srv-201',
    serviceName: 'Saç Kəsimi & Yuma (Fade / Classic)',
    price: 25,
    duration: 45,
    date: '2026-07-24',
    time: '11:00',
    customerName: 'Rauf İsmayılov',
    customerPhone: '+994 70 222 33 44',
    customerTelegram: 'rauf_is',
    customerEmail: 'rauf@box.az',
    status: 'completed',
    createdAt: '2026-07-22T09:15:00Z'
  }
];

export const INITIAL_CUSTOMERS: CustomerProfile[] = [
  {
    id: 'cust-1',
    name: 'Kamran Rəhimov',
    phone: '+994 50 333 22 11',
    email: 'kamran@gmail.com',
    telegram: 'kamran_r',
    birthday: '1992-05-14',
    notes: 'Həmişə vaxtında gəlir. Estetik təmizliyə önəm verir.',
    totalVisits: 5,
    completedVisits: 4,
    cancelledVisits: 0,
    noShowCount: 0,
    lateCount: 1,
    totalSpending: 290,
    favoriteService: 'Peşəkar Diş Təmizlənməsi',
    lastVisit: '2026-07-24',
    isBlacklisted: false
  },
  {
    id: 'cust-2',
    name: 'Leyla Əhmədova',
    phone: '+994 55 444 55 66',
    email: 'leyla.a@mail.ru',
    birthday: '1998-11-20',
    notes: 'Həssas dişləri var.',
    totalVisits: 3,
    completedVisits: 3,
    cancelledVisits: 0,
    noShowCount: 0,
    lateCount: 0,
    totalSpending: 240,
    favoriteService: 'Hollywood Smile Vinir',
    lastVisit: '2026-06-15',
    isBlacklisted: false
  },
  {
    id: 'cust-3',
    name: 'Teymur Hüseynov',
    phone: '+994 51 999 00 11',
    email: 'teymur@test.az',
    notes: 'İki dəfə xəbərdarlıqsız gəlmədi.',
    totalVisits: 2,
    completedVisits: 0,
    cancelledVisits: 0,
    noShowCount: 2,
    lateCount: 0,
    totalSpending: 0,
    isBlacklisted: true,
    blacklistReason: 'Dəfələrlə no-show (görüşə gəlməmək) və zənglərə cavab verməmək.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    professionalId: 'pro-1',
    customerName: 'Samir Musayev',
    rating: 5,
    comment: 'Dr. Nicat bəy çox peşəkar həkimdir. Ağrısız implant əməliyyatına görə minnətdaram!',
    date: '2026-07-10',
    reply: {
      comment: 'Çox sağ olun Samir bəy, sağlamlığınız hər şeydən üstündür!',
      date: '2026-07-11'
    }
  },
  {
    id: 'rev-2',
    professionalId: 'pro-1',
    customerName: 'Nərgiz Məmmədova',
    rating: 5,
    comment: 'Klinikanın təmizliyi, diqqət və gülərüz münasibət 10/10.',
    date: '2026-07-18'
  }
];

export const INITIAL_WAITLIST: WaitlistEntry[] = [
  {
    id: 'wl-1',
    professionalId: 'pro-1',
    serviceId: 'srv-103',
    date: '2026-07-25',
    timeSlot: '15:00',
    customerName: 'Eldar Qasımov',
    customerPhone: '+994 50 111 22 33',
    customerEmail: 'eldar@mail.az',
    status: 'waiting',
    createdAt: '2026-07-23T15:00:00Z'
  }
];
