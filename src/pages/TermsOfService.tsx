import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service – PlayFarm</h1>
        <p className="text-muted-foreground mb-8">Effective Date: [Insert Date]</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-foreground">
            Welcome to PlayFarm! By accessing or using our game or website, you agree to these Terms of Service ("Terms").
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Account</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>You may need to create an account to access certain features.</li>
              <li>You are responsible for keeping your account secure.</li>
              <li>Do not share your account credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. License</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>
                PlayFarm grants you a limited, non-exclusive, non-transferable license to use the game 
                for personal entertainment.
              </li>
              <li>You may not copy, modify, distribute, or sell any part of the game.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. User Conduct</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>You agree not to cheat, hack, or exploit the game.</li>
              <li>No offensive, illegal, or harmful behavior in multiplayer interactions.</li>
              <li>We reserve the right to suspend or terminate accounts for violations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. In-Game Purchases</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Optional in-game purchases may be offered.</li>
              <li>All purchases are non-refundable unless required by law.</li>
              <li>Prices may change at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Termination</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>We may suspend or terminate your access without notice if you violate these Terms.</li>
              <li>Certain sections (license, liability) survive termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>PlayFarm is provided "as is".</li>
              <li>We do not guarantee uninterrupted or error-free gameplay.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground">
              We are not liable for lost data, in-game purchases, or any indirect damages arising from the game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>We may update these Terms periodically.</li>
              <li>Continued use constitutes acceptance of updated Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-foreground">
              These Terms are governed by the laws of [Insert Country / State].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
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

export default TermsOfService;
