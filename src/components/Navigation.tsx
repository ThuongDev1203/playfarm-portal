import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌾</span>
          <span className="text-xl font-bold text-foreground">PlayFarm</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#subscribe" className="text-foreground/80 hover:text-primary transition-colors">
            News
          </a>
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Play Now
          </Button>
        </div>

        <Button 
          size="sm" 
          className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
