import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp } from "@/hooks/use-scroll-animation";

const CallToAction = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-earth" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-12 md:p-16 text-center shadow-growth border-accent/20 bg-gradient-hero relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Join our AI <span className="bg-gradient-growth bg-clip-text text-transparent">community</span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Open to students from any program. Learn AI tools, build products, 
                  and get mentorship from Queen's alumni. No experience required.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Button variant="growth" size="lg" className="text-lg px-10 py-6">
                    Join Community
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-xl">
                    Learn More
                  </Button>
                </motion.div>

                {/* Application details */}
                <motion.div 
                  className="grid md:grid-cols-3 gap-8 text-left"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.8 }}
                >
                                     {[
                     { icon: Clock, title: "Community Open", desc: "Join anytime" },
                     { icon: Users, title: "Open to All", desc: "Any program welcome" },
                     { icon: Zap, title: "Start Learning", desc: "Begin immediately" }
                   ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Requirements */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Who Can Join?</h3>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
                             {[
                 { title: "Any Student", desc: "Open to students from any program or background" },
                 { title: "No Experience Required", desc: "Beginner-friendly workshops and support" },
                 { title: "Curious Builders", desc: "Anyone interested in learning AI and building products" }
               ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 shadow-soft border-accent/20 bg-card/50">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ Teaser */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">
              Have questions? Check out our FAQ or join our Discord community.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" className="text-primary">
                View FAQ
              </Button>
              <Button variant="ghost" className="text-primary">
                Join Discord
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;