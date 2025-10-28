# Project LIFT Website Guide

Welcome to your new Project LIFT website! This guide will help you understand the structure and how to customize the content.

## 🚀 Getting Started

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Website Structure

### Pages

The website consists of 6 main pages:

1. **Home** (`/src/app/page.tsx`) - Landing page with hero, mission, services overview, and CTAs
2. **About** (`/src/app/about/page.tsx`) - Mission, vision, values, how we operate, and priorities
3. **Services** (`/src/app/services/page.tsx`) - Detailed services offered and approach
4. **Team** (`/src/app/team/page.tsx`) - Mentors and team information
5. **Clients** (`/src/app/clients/page.tsx`) - Client showcase with filtering
6. **Get Involved** (`/src/app/get-involved/page.tsx`) - CTAs for businesses and students

### Components

Reusable components in `/src/components/`:

- **Navigation.tsx** - Responsive navbar with mobile menu
- **Footer.tsx** - Footer with links and contact info
- **Hero.tsx** - Hero section component
- **Card.tsx** - Card component with hover effects
- **Section.tsx** - Section wrapper for consistent spacing
- **Button.tsx** - Button component with variants (primary, secondary, outline)

## 🎨 Customization

### Colors

The color scheme is defined in `/src/app/globals.css`:

```css
--primary: #6B8EFF;        /* Main blue from rocket logo */
--primary-dark: #5270E6;   /* Darker shade for hovers */
--primary-light: #8DA8FF;  /* Lighter shade */
--accent: #4D6BCC;         /* Accent color */
```

To change colors, edit these values in the `:root` section.

### Logo

Currently using a placeholder logo ("PL" in a circle). To add your actual logo:

1. Place your logo file in `/public/` (e.g., `/public/logo.png`)
2. Update the logo in `/src/components/Navigation.tsx` and `/src/components/Footer.tsx`

Replace:
```tsx
<div className="w-10 h-10 rounded-full bg-primary...">
  <span className="text-white font-bold text-xl">PL</span>
</div>
```

With:
```tsx
<img src="/logo.png" alt="Project LIFT Logo" className="w-10 h-10" />
```

### Contact Email

Update the contact email throughout the site by searching for `contact@projectlift.umd.edu` and replacing it with your actual email address.

### Social Media Links

Update social media links in `/src/components/Footer.tsx`. Replace the `#` placeholders with your actual social media URLs.

## 📊 Adding Clients

To add or edit clients, modify `/src/data/clients.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Business Name',
  description: 'What you built for them',
  services: ['Website', 'CRM'], // Array of services
  status: 'current', // or 'past'
  logo: '/clients/logo.png', // Optional
  website: 'https://example.com', // Optional
  testimonial: 'Great work!', // Optional
  caseStudyLink: '/case-study', // Optional
}
```

Example:
```typescript
{
  id: 'johns-cafe',
  name: "John's Coffee Cafe",
  description: 'Built a modern website with online ordering system and inventory management.',
  services: ['Website Enhancement', 'Admin Portal'],
  status: 'current',
  logo: '/clients/johns-cafe-logo.png',
  website: 'https://johnscafe.com',
  testimonial: 'Project LIFT transformed our online presence!',
}
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Grid layouts that adapt to screen sizes

### Dark Mode
- Automatically switches based on system preferences
- Respects user's OS theme setting

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation support

### Performance
- Next.js optimizations
- Fast page loads
- Optimized routing

## 📝 Content Updates

### Updating Text Content

All page content is directly in the page files. To update:

1. Navigate to the page file (e.g., `/src/app/about/page.tsx`)
2. Find the text you want to change
3. Edit directly in the JSX

### Adding New Sections

Use the existing components to maintain consistency:

```tsx
<Section background="muted"> {/* or "default" */}
  <Card hover>
    <h3>Your Title</h3>
    <p>Your content</p>
  </Card>
</Section>
```

### Button Usage

```tsx
<Button 
  href="/path" 
  variant="primary"  // or "secondary", "outline"
  size="lg"          // or "md", "sm"
>
  Button Text
</Button>
```

## 🔧 Common Customizations

### Navigation Links

Edit `/src/components/Navigation.tsx`:

```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add or remove links here
];
```

### Footer Links

Edit `/src/components/Footer.tsx` to update quick links, contact info, and social media.

### Metadata (SEO)

Each page has metadata at the top:

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Project LIFT',
  description: 'Page description for SEO',
};
```

Update these for better search engine optimization.

## 🎨 Design System

### Typography
- Headings: Bold, sizes from `text-xl` to `text-4xl`
- Body: `text-base` with `text-foreground/70` for secondary text

### Spacing
- Sections: `py-16 md:py-24`
- Cards: `p-6`
- Grid gaps: `gap-6` or `gap-8`

### Shadows & Borders
- Cards: `shadow-md border border-border`
- Hover: `hover:shadow-xl hover:-translate-y-1`

## 📱 Testing

### Browser Testing
Test on multiple browsers:
- Chrome/Edge
- Firefox
- Safari

### Responsive Testing
Test on different screen sizes:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

### Dark Mode Testing
Toggle your system dark mode to test both themes.

## 🚀 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## 📞 Support

If you need help customizing the website:
1. Refer to [Next.js Documentation](https://nextjs.org/docs)
2. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. Review the component examples in this codebase

## ✨ Tips

1. **Keep it Simple**: The clean design is part of the appeal
2. **Be Consistent**: Use the existing components for consistency
3. **Test Changes**: Always test in dev mode before deploying
4. **Update Regularly**: Keep your client showcase and content fresh
5. **Optimize Images**: Compress images before adding them to `/public/`

---

Built with ❤️ for Project LIFT

