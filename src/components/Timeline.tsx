import { Card } from "@/components/ui/card";
import workshopIcon from "@/assets/ai-workshop-icon.jpg";
import buildingIcon from "@/assets/ai-building-icon.jpg";
import mentorshipIcon from "@/assets/ai-mentorship-icon.jpg";
import demoIcon from "@/assets/ai-demo-icon.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "@/hooks/use-scroll-animation";
import { Brain, Rocket, Users, Presentation } from "lucide-react";

const timelineSteps = [
  {
    title: "Learn AI Tools",
    description: "Light, accessible workshops on core tools",
    details: "Start with GPT, n8n, and Cursor through beginner-friendly workshops. No prior experience required - we'll teach you everything from scratch.",
    icon: Brain,
    duration: "Ongoing"
  },
  {
    title: "Build Products", 
    description: "Create your own AI-powered tools",
    details: "Throughout the year, build AI-powered tools or products with community support. Learn by doing with real projects and get feedback from peers.",
    icon: Rocket,
    duration: "Year-round"
  },
  {
    title: "Get Mentorship",
    description: "Guidance from startup founders and alumni",
    details: "Connect with startup founders and Queen's alumni who've been in your shoes. Get personalized guidance and build your network.",
    icon: Users,
    duration: "Ongoing"
  },
  {
    title: "Pitch to VCs",
    description: "Top 3 projects present to investors",
    details: "At the end of the year, the top 3 projects will be selected to pitch directly to VCs for potential funding opportunities.",
    icon: Presentation,
    duration: "Annual"
  }
];

const Timeline = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-earth" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Our <span className="bg-gradient-growth bg-clip-text text-transparent">Community</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An open community where students from any program can learn, build, and grow together. 
            No experience required — just join and start building.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-growth opacity-30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 relative">
            {timelineSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 md:-ml-4 w-8 h-8 bg-gradient-to-br from-card/90 to-card/70 border-4 border-accent rounded-full shadow-soft z-10 flex items-center justify-center overflow-hidden"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Organic pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-organic rounded-full opacity-0"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main dot */}
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-br from-primary to-primary/80 rounded-full relative z-10"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Organic glow */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>

                {/* Content card */}
                <div className={`w-full md:w-6/12 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <Card className="p-8 shadow-card border-accent/20 bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-sm hover:shadow-growth transition-all duration-300 group relative overflow-hidden">
                      {/* Organic background pattern */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Subtle organic border glow */}
                      <motion.div 
                        className="absolute inset-0 rounded-lg border border-accent/10 group-hover:border-accent/30"
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className="flex-shrink-0"
                          whileHover={{ 
                            rotate: 5, 
                            scale: 1.1
                          }}
                          transition={{ 
                            duration: 0.3
                          }}
                        >
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-organic rounded-2xl shadow-soft group-hover:shadow-growth transition-all duration-300">
                            <step.icon className="w-8 h-8 text-primary" />
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 relative z-10 min-w-0">
                          <div className="flex items-start gap-3 mb-3 flex-wrap">
                            <motion.h3 
                              className="text-2xl font-bold text-foreground break-words"
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.span 
                              className="px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/30 text-accent text-sm font-medium rounded-full border border-accent/30 flex-shrink-0"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {step.duration}
                            </motion.span>
                          </div>
                          
                          <motion.p 
                            className="text-lg font-medium text-primary mb-3 break-words"
                            whileHover={{ x: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {step.description}
                          </motion.p>
                          
                          <motion.p 
                            className="text-muted-foreground leading-relaxed break-words"
                            whileHover={{ x: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {step.details}
                          </motion.p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;