
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Star, Trophy, User } from 'lucide-react';

// Mock data for leaderboard
const leaderboardData = [
  { id: 1, username: "MusicMaestro", score: 9850, wins: 42, rank: 1 },
  { id: 2, username: "TuneMaster", score: 8720, wins: 38, rank: 2 },
  { id: 3, username: "MelodyQueen", score: 8150, wins: 35, rank: 3 },
  { id: 4, username: "RhythmKing", score: 7920, wins: 34, rank: 4 },
  { id: 5, username: "SongSeeker", score: 7640, wins: 32, rank: 5 },
  { id: 6, username: "LyricalGenius", score: 7320, wins: 30, rank: 6 },
  { id: 7, username: "VocalVirtuoso", score: 7105, wins: 28, rank: 7 },
  { id: 8, username: "BeatBoxer", score: 6890, wins: 27, rank: 8 },
  { id: 9, username: "NoteMaster", score: 6740, wins: 26, rank: 9 },
  { id: 10, username: "TuneTitan", score: 6580, wins: 25, rank: 10 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Global Leaderboard
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The top players from around the world competing in Damsaaz. 
              Can you make it to the top of the rankings?
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="md:w-1/3">
              <div className="bg-card border rounded-xl p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-damsaaz-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h2 className="font-heading font-bold text-2xl mb-1">
                  {leaderboardData[0].username}
                </h2>
                <p className="text-muted-foreground mb-4">Current Champion</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Score</p>
                    <p className="font-bold text-xl">{leaderboardData[0].score.toLocaleString()}</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">Wins</p>
                    <p className="font-bold text-xl">{leaderboardData[0].wins}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="bg-muted px-6 py-4 border-b">
                  <h3 className="font-heading font-semibold">Top Players</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-6 py-3 text-left text-sm font-medium">Rank</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Player</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Score</th>
                        <th className="px-6 py-3 text-left text-sm font-medium">Wins</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((player) => (
                        <tr key={player.id} className="border-b last:border-b-0 hover:bg-muted/50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {player.rank === 1 && <Star className="h-4 w-4 text-damsaaz-gold mr-1" />}
                              {player.rank === 2 && <Star className="h-4 w-4 text-gray-400 mr-1" />}
                              {player.rank === 3 && <Star className="h-4 w-4 text-amber-700 mr-1" />}
                              <span>{player.rank}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-damsaaz-purple/10 flex items-center justify-center mr-3">
                                <User className="h-4 w-4 text-damsaaz-purple" />
                              </div>
                              {player.username}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {player.score.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {player.wins}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="font-heading font-semibold text-xl mb-4">
              How Rankings Work
            </h2>
            <div className="space-y-4">
              <p>
                Players earn points based on their performance in Damsaaz games:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Correctly guessing a song: 50-100 points (based on speed)</li>
                <li>Performing a song that others guess: 25 points per successful guess</li>
                <li>Winning a game (most points): 200 bonus points</li>
                <li>Consecutive correct guesses: Combo multiplier (up to 2x)</li>
              </ul>
              <p>
                Rankings are updated daily, and seasonal tournaments offer additional opportunities 
                to climb the leaderboard and earn special rewards.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
