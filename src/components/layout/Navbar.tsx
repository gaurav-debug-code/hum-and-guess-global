
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Music, UserPlus, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-1.5 rounded-full bg-damsaaz-purple text-white">
            <Music size={20} />
          </div>
          <span className="font-heading font-bold text-xl">Damsaaz</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/how-to-play" className="text-foreground/80 hover:text-foreground transition-colors">
            How to Play
          </Link>
          <Link to="/games" className="text-foreground/80 hover:text-foreground transition-colors">
            Join Games
          </Link>
          <Link to="/leaderboard" className="text-foreground/80 hover:text-foreground transition-colors">
            Leaderboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/login">
              <LogIn size={18} className="mr-2" />
              Log In
            </Link>
          </Button>
          <Button className="bg-damsaaz-purple hover:bg-damsaaz-purple/90" asChild>
            <Link to="/signup">
              <UserPlus size={18} className="mr-2" />
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
