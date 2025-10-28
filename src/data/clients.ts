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
    status: 'current',
    logo: '/clients/r2c.png',
    website: 'https://r2cinc.com',
  },
  {
    id: 'example-4',
    name: 'XITM',
    description: 'Implemented AI parsing tools to automate data extraction from various sources.',
    services: ['AI Data Analysis', 'Web Scraper'],
    status: 'current',
    logo: '/clients/xitm.png',
    website: 'https://xprotege.com',
  },
  {
    id: 'example-5',
    name: '1 Cut Above',
    description: 'Built a modern app for 1 Cut Above barbershop, saving $30,000 yearly in fees.',
    services: ['App Development', 'Admin Portal'],
    status: 'current',
    logo: '/clients/cut-above.png',
    website: 'https://www.yelp.com/biz/1-cut-above-olney',
  },
  // Add more clients following the same structure
];

// Filter helpers
export const getCurrentClients = () => clients.filter(c => c.status === 'current');
export const getPastClients = () => clients.filter(c => c.status === 'past');

