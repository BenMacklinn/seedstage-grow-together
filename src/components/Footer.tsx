import { Sprout, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/seedstage-logo.jpg" 
                alt="Seedstage Logo" 
                className="h-12 w-12 object-cover rounded-lg"
              />
              <span className="text-xl font-bold">Seedstage</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              An open AI product community where students from any program can learn, build, and grow together.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-accent" />
              </div>
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 text-accent" />
              </div>
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>

          {/* Program */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">How It Works</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Workshops</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Mentors</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">VC Pitch</a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Alumni</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Discord</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Events</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">FAQ</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-accent transition-colors">Support</a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>hello@seedstage.ai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Seedstage. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs italic">
              Even this website was built by someone who doesn't know how to code
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;