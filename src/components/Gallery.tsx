import animalsImg from '@/assets/animals.jpg';
import farmhouseImg from '@/assets/farmhouse.jpg';
import heroFarm from '@/assets/hero-farm.jpg';
import character from '@/assets/character-1.png';

const galleryItems = [
  {
    image: heroFarm,
    title: 'Your Beautiful Farm',
    description: 'Create a stunning landscape'
  },
  {
    image: animalsImg,
    title: 'Adorable Animals',
    description: 'Raise cute farm friends'
  },
  {
    image: farmhouseImg,
    title: 'Cozy Farmhouse',
    description: 'Decorate your dream home'
  },
  {
    image: character,
    title: 'Customize Your Character',
    description: 'Express your style'
  }
];

const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore PlayFarm 📸
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the charming world that awaits you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
