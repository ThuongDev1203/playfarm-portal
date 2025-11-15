import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy – PlayFarm</h1>
        <p className="text-muted-foreground mb-8">Effective Date: [Insert Date]</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-foreground">
            PlayFarm ("we", "our", or "us") respects your privacy and is committed to protecting it. 
            This Privacy Policy explains how we collect, use, and share your information when you use our game and website.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>
                <strong>Personal Information:</strong> Email, username, and any information you provide when creating 
                an account or subscribing to newsletters.
              </li>
              <li>
                <strong>Usage Data:</strong> Game progress, achievements, device type, IP address, and interaction data.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> We may use cookies or similar technologies to improve your experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>To provide, maintain, and improve the game experience.</li>
              <li>To communicate updates, newsletters, promotions, or beta invitations.</li>
              <li>For analytics, research, and to enhance gameplay features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>We do not sell your personal information.</li>
              <li>
                We may share data with service providers that help us run the game 
                (analytics, hosting, payment providers).
              </li>
              <li>Required disclosure by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Access, correct, or delete your personal data.</li>
              <li>Opt-out of promotional communications.</li>
              <li>Contact us anytime regarding privacy concerns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-foreground">
              We implement reasonable technical and administrative measures to protect your data. 
              No method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Children's Privacy</h2>
            <p className="text-foreground">
              PlayFarm is intended for all ages, but we comply with COPPA and other regulations. 
              We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-foreground">
              <strong>Email:</strong> <a href="mailto:nexzap.studio@gmail.com" className="text-primary hover:underline">nexzap.studio@gmail.com</a>
            </p>
            <p className="text-foreground">
              <strong>Website:</strong> <a href="https://playfarm.onrender.com" className="text-primary hover:underline">https://playfarm.onrender.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
