
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted music-pattern p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="p-2 rounded-full bg-damsaaz-purple text-white mb-4">
              <Music size={24} />
            </div>
            <h1 className="font-heading font-bold text-2xl">Log in to Damsaaz</h1>
            <p className="text-muted-foreground">Continue your musical journey</p>
          </div>
          
          <form className="space-y-4">
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
              <Input type="password" id="password" placeholder="Enter your password" />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-damsaaz-purple focus:ring-damsaaz-purple"
                />
                <label htmlFor="remember-me" className="ml-2 block">
                  Remember me
                </label>
              </div>
              <div>
                <a href="#" className="text-damsaaz-purple hover:text-damsaaz-purple/80">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-damsaaz-purple hover:bg-damsaaz-purple/90">
              Log In
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-damsaaz-purple hover:text-damsaaz-purple/80 font-medium">
                Sign up
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

export default Login;
