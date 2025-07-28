import { Card } from "@/components/ui/card";
import { Bot, Rocket, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp } from "@/hooks/use-scroll-animation";
import CountUp from './CountUp';

const features = [
  {
    icon: Bot,
    title: "Accessible AI Learning",
    description: "Learn core AI tools like GPT, n8n, and Cursor through light, beginner-friendly workshops. No prior experience required.",
    highlight: "Start from zero knowledge"
  },
  {
    icon: Users,
    title: "Queen's Alumni Network",
    description: "Get guidance from startup founders and Queen's alumni mentors. Build your network with successful entrepreneurs.",
    highlight: "Direct mentor access"
  },
  {
    icon: Rocket,
    title: "Build Your Own Products",
    description: "Throughout the year, build AI-powered tools or products with community support. Learn by doing with real projects.",
    highlight: "Hands-on experience"
  },
  {
    icon: TrendingUp,
    title: "VC Pitch Opportunity",
    description: "Top 3 projects get selected to pitch directly to VCs for potential funding. Turn your ideas into reality.",
    highlight: "Direct funding access"
  }
];

const ValueProposition = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Join Our <span className="bg-gradient-growth bg-clip-text text-transparent">Community</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An open community where students from any program can learn AI tools, build products, 
            and get mentorship. No experience required — just curiosity and drive to build.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 text-center shadow-card border-accent/20 bg-card/50 hover:bg-card/80 hover:shadow-growth transition-all duration-300 group">
                <motion.div 
                  className="mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-organic rounded-2xl shadow-soft group-hover:shadow-growth transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full">
                  {feature.highlight}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="mt-20 bg-gradient-organic rounded-2xl p-12 shadow-growth"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { number: 100, label: "Community members" },
              { number: 25, label: "Projects built" },
              { number: 3, label: "VC pitch spots" },
              { number: 0, label: "Experience required" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp from={0} to={stat.number} duration={2} />
                  {stat.label === "Community members" && "+"}
                  {stat.label === "Projects built" && "+"}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;