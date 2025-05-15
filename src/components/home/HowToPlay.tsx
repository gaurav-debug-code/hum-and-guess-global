
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and set your language preferences, musical interests, and skill level."
  },
  {
    number: "02", 
    title: "Join a Game Room",
    description: "Find a room with players matching your preferences or create your own and invite friends."
  },
  {
    number: "03",
    title: "Take Turns Performing",
    description: "When selected as the singer, choose a song and perform it live for others to guess."
  },
  {
    number: "04",
    title: "Guess and Score",
    description: "Listen carefully when others perform and be the first to correctly guess the song to earn points."
  }
];

const HowToPlay: React.FC = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            How to Play Damsaaz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Damsaaz is easy to learn but requires musical skill and quick thinking. Here's how to get started:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-xl border shadow-sm h-full">
                <div className="text-3xl font-bold text-damsaaz-purple/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-[2px] bg-border">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-damsaaz-purple rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-damsaaz-purple hover:bg-damsaaz-purple/90" asChild>
            <Link to="/how-to-play">
              Learn More About the Game
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
