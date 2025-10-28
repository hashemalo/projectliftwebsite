import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Project LIFT Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Project LIFT
              </span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Empowering Maryland's small businesses through technology and student innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/get-involved" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  For Students
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:projectlift.umd@gmail.com" 
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  projectlift.umd@gmail.com
                </a>
              </li>
              <li className="text-foreground/60 text-sm">
                University of Maryland, College Park
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.instagram.com/projectlift.umd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full overflow-hidden bg-foreground/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/insta.jpg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/project-lift-umd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full overflow-hidden bg-foreground/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.jpeg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center md:text-left">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Project LIFT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

