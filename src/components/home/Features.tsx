
import React from 'react';
import { Users, Music, Star, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-10 w-10 text-damsaaz-purple" />,
    title: "Global Matchmaking",
    description: "Join players from around the world, matched by language preferences, skill level, and musical interests."
  },
  {
    icon: <Music className="h-10 w-10 text-damsaaz-purple" />,
    title: "Live Audio Streaming",
    description: "Sing or hum tunes in real-time while others listen and try to guess your musical selection."
  },
  {
    icon: <Star className="h-10 w-10 text-damsaaz-purple" />,
    title: "Competitive Leaderboards",
    description: "Earn points, climb the rankings, and showcase your musical knowledge and guessing skills."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-damsaaz-purple" />,
    title: "Interactive Group Chats",
    description: "Chat with your group, make friends, and coordinate game strategies in real-time."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            What Makes Damsaaz Special
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform brings the traditional game of Damsaaz into the digital age with features designed to create an authentic and engaging experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
