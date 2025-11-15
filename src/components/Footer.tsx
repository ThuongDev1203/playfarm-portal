import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">🌾 PlayFarm</h3>
            <p className="text-muted-foreground">
              The cutest farm game where you can grow, play, and connect with friends!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-pink hover:text-pink-foreground transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-destructive hover:text-destructive-foreground transition-all hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 PlayFarm. All rights reserved. Made with 💚 for farmers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
