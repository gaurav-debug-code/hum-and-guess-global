
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Music } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 music-pattern">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Experience <span className="text-gradient">Damsaaz</span> <br /> 
            The Musical Guessing Game
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Sing, guess, and compete in the classic Indian music game now available online! Connect with players worldwide in real-time musical showdowns.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-damsaaz-purple hover:bg-damsaaz-purple/90" asChild>
              <Link to="/games">
                <Play size={20} className="mr-2" />
                Play Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-to-play">
                Learn How to Play
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="w-full h-[400px] bg-gradient-to-br from-damsaaz-purple/20 to-damsaaz-crimson/20 rounded-2xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-72 h-72 rounded-full bg-damsaaz-gold/20 animate-pulse-subtle"></div>
              <div className="absolute w-48 h-48 rounded-full bg-damsaaz-purple/30 animate-pulse-subtle" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute w-36 h-36 rounded-full bg-damsaaz-crimson/20 animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
              <div className="relative z-10 p-6 bg-background/80 backdrop-blur-md rounded-2xl shadow-lg animate-float">
                <div className="w-16 h-16 bg-damsaaz-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-center mb-2">Sing & Guess</h3>
                <p className="text-muted-foreground text-center">
                  Showcase your musical talents and test your listening skills
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-damsaaz-gold/30 rounded-lg"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-damsaaz-purple/30 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
