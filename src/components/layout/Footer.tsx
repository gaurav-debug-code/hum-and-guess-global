
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Damsaaz</h3>
            <p className="text-muted-foreground">
              The classic Indian musical guessing game, now online for everyone to enjoy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-to-play" className="text-muted-foreground hover:text-foreground transition-colors">
                    How to Play
                  </Link>
                </li>
                <li>
                  <Link to="/games" className="text-muted-foreground hover:text-foreground transition-colors">
                    Join Games
                  </Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter for updates.
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-background border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Damsaaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
