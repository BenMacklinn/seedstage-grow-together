import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp } from "@/hooks/use-scroll-animation";



const mentors = [
  {
    name: "Sarah Chen",
    role: "Founder @ TechFlow",
    company: "Queen's Engineering '18"
  },
  {
    name: "Mike Rodriguez",
    role: "Product Manager @ AI Startup",
    company: "Queen's Business '19"
  },
  {
    name: "Lisa Thompson",
    role: "Founder @ DataViz",
    company: "Queen's Computer Science '17"
  },
  {
    name: "David Park",
    role: "Angel Investor",
    company: "Queen's Alumni Network"
  }
];

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-earth" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Mentors & Investors */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our <span className="bg-gradient-growth bg-clip-text text-transparent">Mentors</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get guidance from startup founders and Queen's alumni who've been in your shoes
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 text-center shadow-soft border-accent/20 bg-card/60 hover:bg-card/80 transition-all duration-300">
                <motion.div 
                  className="w-16 h-16 bg-gradient-organic rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </motion.div>
                <h4 className="font-bold text-foreground mb-1">{mentor.name}</h4>
                <p className="text-sm text-primary font-medium mb-1">{mentor.role}</p>
                <p className="text-sm text-muted-foreground">{mentor.company}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;