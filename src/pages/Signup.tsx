
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted music-pattern p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="p-2 rounded-full bg-damsaaz-purple text-white mb-4">
              <Music size={24} />
            </div>
            <h1 className="font-heading font-bold text-2xl">Join Damsaaz</h1>
            <p className="text-muted-foreground">Create your account to start playing</p>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                  First name
                </label>
                <Input type="text" id="first-name" placeholder="First name" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                  Last name
                </label>
                <Input type="text" id="last-name" placeholder="Last name" />
              </div>
            </div>
            
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <Input type="text" id="username" placeholder="Choose a username" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <Input type="password" id="password" placeholder="Create a password" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Language Preferences
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    id="lang-english"
                    name="language"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                  />
                  <label htmlFor="lang-english" className="ml-2 text-sm">
                    English
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lang-hindi"
                    name="language"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                  />
                  <label htmlFor="lang-hindi" className="ml-2 text-sm">
                    Hindi
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lang-tamil"
                    name="language"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                  />
                  <label htmlFor="lang-tamil" className="ml-2 text-sm">
                    Tamil
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lang-punjabi"
                    name="language"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                  />
                  <label htmlFor="lang-punjabi" className="ml-2 text-sm">
                    Punjabi
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-damsaaz-purple hover:text-damsaaz-purple/80">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-damsaaz-purple hover:text-damsaaz-purple/80">
                  Privacy Policy
                </Link>
              </label>
            </div>
            
            <Button type="submit" className="w-full bg-damsaaz-purple hover:bg-damsaaz-purple/90">
              Create Account
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-damsaaz-purple hover:text-damsaaz-purple/80 font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
