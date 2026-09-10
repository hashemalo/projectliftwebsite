// Client data structure
// Add or edit clients here to update the Clients page

export interface Client {
  id: string;
  name: string;
  description: string;
  services: string[]; // e.g., ["Website", "CRM", "AI Analysis"]
  status: 'current' | 'past';
  logo?: string; // Path to logo image (optional)
  website?: string; // Client website URL (optional)
  testimonial?: string; // Client testimonial (optional)
  caseStudyLink?: string; // Link to detailed case study (optional)
}

// Add your clients here
export const clients: Client[] = [
  // Example client - remove or replace with real clients
  {
    id: 'exaample-1',
    name: 'Craving Hour Halal',
    description: 'Built a modern website with integrated CRM system to streamline customer management and boost online presence.',
    services: ['Website Enhancement', 'CRM', 'Inventory Management', 'Admin Portal'],
    status: 'past',
    logo: '/clients/craving-hour.png', // Uncomment and add logo path
    website: 'https://cravinghourhalal.com',
  },
  {
    id: 'example-2',
    name: 'Hyperkidz',
    description: 'Developed an admin portal for managing inventory, employees, and customer orders efficiently.',
    services: ['Admin Portal', 'CRM'],
    status: 'past',
    logo: '/clients/hyperkidz.png',
    website: 'https://hyperkidzplay.com',
  },
  {
    id: 'example-3',
    name: 'R2C Solutions',
    description: 'Implemented AI-driven data analysis tools to gain insights on customer behavior and optimize business operations.',
    services: ['AI Data Analysis', 'Web Scraper'],
    status: 'past',
    logo: '/clients/r2c.png',
    website: 'https://r2cinc.com',
  },
  {
    id: 'example-4',
    name: 'XITM',
    description: 'Implemented AI parsing tools to automate data extraction from various sources.',
    services: ['AI Data Analysis', 'Web Scraper'],
    status: 'past',
    logo: '/clients/xitm.png',
    website: 'https://xprotege.com',
  },
  {
    id: 'example-5',
    name: '1 Cut Above',
    description: 'Built a modern app for 1 Cut Above barbershop, saving $30,000 yearly in fees.',
    services: ['App Development', 'Admin Portal'],
    status: 'past',
    logo: '/clients/cut-above.png',
    website: 'https://www.yelp.com/biz/1-cut-above-olney',
  },
  {
    id: 'example-6',
    name: 'Rip Current Sports',
    description: 'Built a centralized client management dashboard with lead tracking and pipeline management.',
    services: ['Web Scraper', 'Admin Portal'],
    status: 'past',
    logo: '/clients/rip-sports.png',
    website: 'https://ripcurrentsports.com/',
  },
  {
    id: 'example-7',
    name: 'Forging and Welding by Will',
    description: 'Built a web platform to manage products, organize workflows, and track orders',
    services: ['Website', 'Inventory Management', 'Admin Portal'],
    status: 'past',
    logo: '/clients/fwwill.png',
    //temp website not used?
    website: 'https://f-wwithwill.vercel.app/',
  },
  {
    id: 'example-8',
    name: 'Trippy Tacos',
    description: 'Built and Installed modular metal latching system to allow for safe and easy cleaning. Developed an AI dashboard that analyzes review sentiment and maps local events to analyze community events.',
    services: ['AI Integration', 'Inventory Management', 'Hardware'],
    status: 'past',
    logo: '/clients/trippy.png',
    website: 'https://trippytacos240.com/',
  },
  {
    id: 'example-9',
    name: 'The Board and Brew',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/boardbrew.png',
    website: 'https://theboardandbrew.com/',
  },
  {
    id: 'example-10',
    name: 'GlassBox Padel',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/glassbox.png',
    website: 'https://glassboxpadel.com/',
  },
  {
    id: 'example-11',
    name: 'Brown Boy Nation',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/bbn.png',
    website: 'https://brownboynation.us/',
  },
  {
    id: 'example-12',
    name: 'Châteaux Cocoa',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/chateaux.png',
    website: 'https://www.chateauxcocoa.com/',
  },
  {
    id: 'example-13',
    name: 'Clover\'s Cakes',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/ccakes.png',
    website: 'https://cloverscakesbakery.square.site/',
  },
  {
    id: 'example-14',
    name: 'Dee Zobo',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/deezobo.png',
    website: 'https://www.facebook.com/people/Dee-Zobo/100064347330297/#',
  },
  {
    id: 'example-15',
    name: 'Diaspora Honey',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/diaspora.png',
    website: 'https://www.instagram.com/diasporahoney/',
  },
  {
    id: 'example-16',
    name: 'Wood\'s Flowers and Gifts',
    description: 'Fall 2026 Client',
    services: [],
    status: 'current',
    logo: '/clients/woods.png',
    website: 'https://www.woodsflowersandgifts.com/',
  },
  // Add more clients following the same structure
];

// Filter helpers
export const getCurrentClients = () => clients.filter(c => c.status === 'current');
export const getPastClients = () => clients.filter(c => c.status === 'past');

