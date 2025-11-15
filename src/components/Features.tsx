import { Sprout, Home, Users, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Sprout,
    title: 'Plant & Harvest',
    description: 'Grow beautiful crops, water them daily, and watch your farm flourish with colorful harvests.',
    color: 'text-primary'
  },
  {
    icon: Home,
    title: 'Build Your Dream Farm',
    description: 'Decorate with cute furniture, expand your land, and create the most adorable farm in the valley.',
    color: 'text-secondary'
  },
  {
    icon: Users,
    title: 'Play Together',
    description: 'Visit friends\' farms, trade items, and compete in fun multiplayer mini-games and events.',
    color: 'text-accent'
  },
  {
    icon: Gift,
    title: 'Collect & Customize',
    description: 'Unlock adorable outfits, rare animals, and special decorations to make your farm unique.',
    color: 'text-pink'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Farm Life Awaits! 🌻
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the joy of farming with friends in this charming casual game
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
