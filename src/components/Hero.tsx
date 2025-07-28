import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/ai-hero-tech.jpg";
import { motion } from "framer-motion";
import CountUp from './CountUp';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20 shadow-soft"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Open AI Product Community</span>
              <Zap className="w-3 h-3 text-primary animate-pulse" />
            </motion.div>

            {/* Main headline */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Build</span>{" "}
                <span className="bg-gradient-growth bg-clip-text text-transparent">AI products</span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                With your community
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                No experience required
              </p>
            </motion.div>

            {/* Subheading */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Join our open community where students from any program can learn AI tools, build products, 
              and get mentorship from startup founders and Queen's alumni. Top projects pitch to VCs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Join Community
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary">
                  <CountUp from={0} to={100} duration={2} />+
                </div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary">
                  <CountUp from={0} to={25} duration={2} />+
                </div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-primary">
                  <CountUp from={0} to={3} duration={2} />
                </div>
                <div className="text-sm text-muted-foreground">VC Pitch Spots</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-growth"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="AI startup ecosystem with neural networks and tech innovation" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm p-4 rounded-xl shadow-card border border-accent/20"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-sm font-medium text-primary">Open to All Students</div>
              <div className="text-xs text-muted-foreground">Any program welcome</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;