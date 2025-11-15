import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero3D />
      <div id="features">
        <Features />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="subscribe">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
