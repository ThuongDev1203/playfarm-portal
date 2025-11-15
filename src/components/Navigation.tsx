import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import logo from '@/assets/logo-playfarm.png';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <img src={logo} alt="PlayFarm" className="h-12 w-auto" />
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

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button 
              size="sm" 
              className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              <a 
                href="#features" 
                className="text-foreground/80 hover:text-primary transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#gallery" 
                className="text-foreground/80 hover:text-primary transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#subscribe" 
                className="text-foreground/80 hover:text-primary transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </a>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Play Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
