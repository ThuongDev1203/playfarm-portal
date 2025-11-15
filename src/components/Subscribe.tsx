import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to PlayFarm! 🎉",
        description: "You'll be the first to know about updates and beta access!",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the Farm Family! 🌟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be the first to know about updates, events, and get exclusive beta access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-scale-in">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 text-base border-2 focus:border-primary"
            required
          />
          <Button 
            type="submit"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all hover:scale-105 shadow-lg"
          >
            Subscribe 💌
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Join 10,000+ farmers already signed up! 🎊
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
