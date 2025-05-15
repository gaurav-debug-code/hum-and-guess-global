
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-damsaaz-purple to-damsaaz-crimson rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Experience Damsaaz Online?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of players who are already enjoying the classic musical guessing game in a modern digital format. Sign up now and start playing!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-damsaaz-purple hover:bg-white/90" asChild>
                <Link to="/signup">
                  Create Free Account
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/games">
                  Browse Active Games
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
