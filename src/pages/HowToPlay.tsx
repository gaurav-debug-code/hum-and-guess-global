
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Music } from 'lucide-react';

const HowToPlay: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
              How to Play Damsaaz
            </h1>
            
            <div className="bg-card border rounded-xl p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-damsaaz-purple/10">
                  <Music className="h-8 w-8 text-damsaaz-purple" />
                </div>
              </div>
              <p className="text-center text-lg mb-4">
                Damsaaz is a traditional Indian musical guessing game that has been enjoyed for generations. 
                Now, you can play it online with friends or players from around the world!
              </p>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="font-heading font-semibold text-2xl mb-4">Game Overview</h2>
                <p className="mb-4">
                  Damsaaz is a musical game where players take turns singing or humming a tune while others try to guess the song. 
                  The game tests both musical ability and recognition skills, creating a fun and engaging experience for all participants.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl mb-4">Basic Rules</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">1. Group Formation</h3>
                    <p>Players are organized into groups of 4-6 people, either randomly matched or manually created.</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">2. Singer Selection</h3>
                    <p>Each round, one player is selected as the singer through group voting or rotation.</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">3. Performance</h3>
                    <p>The selected singer chooses a song and performs it live via audio stream. They can hum the tune or sing the melody without lyrics.</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">4. Guessing Phase</h3>
                    <p>Other players try to guess the song name by typing their answers in the chat. The first player to guess correctly earns points.</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">5. Scoring</h3>
                    <p>Points are awarded based on the speed and accuracy of guesses. Both singers and guessers can earn points.</p>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2">6. Rounds</h3>
                    <p>A typical game consists of multiple rounds, ensuring everyone gets a chance to be the singer.</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl mb-4">Tips for Success</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Choose songs that are likely to be recognized by your group based on their interests and backgrounds.</li>
                  <li>When singing/humming, focus on the most recognizable parts of the song like the chorus or hook.</li>
                  <li>When guessing, pay attention to the rhythm and melody patterns to identify familiar songs.</li>
                  <li>Keep a diverse mental catalog of songs from various genres and languages to improve your guessing capabilities.</li>
                  <li>Practice your humming skills to make tunes more recognizable when it's your turn to perform.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-heading font-semibold text-2xl mb-4">Technical Requirements</h2>
                <p className="mb-4">To enjoy the full Damsaaz experience, you'll need:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A stable internet connection for real-time audio streaming</li>
                  <li>A microphone for singing/humming when it's your turn</li>
                  <li>Speakers or headphones to hear other players' performances</li>
                  <li>A modern web browser (Chrome, Firefox, Safari, or Edge recommended)</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowToPlay;
