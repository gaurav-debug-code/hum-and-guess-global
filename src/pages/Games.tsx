
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Users, Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for active games
const activeGames = [
  {
    id: 1,
    name: "Bollywood Classics",
    players: 4,
    maxPlayers: 6,
    language: "Hindi",
    difficulty: "Medium"
  },
  {
    id: 2,
    name: "International Hits",
    players: 3,
    maxPlayers: 5,
    language: "English",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Tamil Melodies",
    players: 5,
    maxPlayers: 6,
    language: "Tamil",
    difficulty: "Hard"
  },
  {
    id: 4,
    name: "90s Nostalgia",
    players: 2,
    maxPlayers: 6,
    language: "Mixed",
    difficulty: "Medium"
  }
];

const Games: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">
                Join a Game
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Find active game rooms to join or create your own custom room to play with friends.
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-damsaaz-purple hover:bg-damsaaz-purple/90">
              <Plus size={18} className="mr-2" />
              Create New Room
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeGames.map((game) => (
              <div key={game.id} className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-heading font-semibold text-xl">{game.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      game.difficulty === "Easy" ? "bg-green-100 text-green-800" : 
                      game.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : 
                      "bg-red-100 text-red-800"
                    }`}>
                      {game.difficulty}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users size={16} className="mr-2" />
                      <span>{game.players}/{game.maxPlayers} Players</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Language:</span> {game.language}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-damsaaz-purple hover:bg-damsaaz-purple/90" asChild>
                    <Link to={`/games/${game.id}`}>
                      <Play size={18} className="mr-2" />
                      Join Game
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <h2 className="font-heading font-semibold text-2xl mb-4">
              Game Filters
            </h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Language</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="all">All Languages</option>
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                    <option value="tamil">Tamil</option>
                    <option value="telugu">Telugu</option>
                    <option value="punjabi">Punjabi</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Difficulty</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Available Slots</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="all">Any</option>
                    <option value="at-least-1">At least 1</option>
                    <option value="at-least-2">At least 2</option>
                    <option value="at-least-3">At least 3</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" className="mr-2">Reset</Button>
                <Button>Apply Filters</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
