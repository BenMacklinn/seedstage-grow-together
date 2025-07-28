import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import CountUp from './CountUp';

const CommunityStats = () => {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    {
      number: 150,
      label: "Projects Built",
      description: "AI-powered applications created by our community"
    },
    {
      number: 25,
      label: "VC Pitch Spots",
      description: "Startups that secured funding through our network"
    },
    {
      number: 500,
      label: "Active Members",
      description: "Developers and entrepreneurs in our community"
    },
    {
      number: 2.5,
      label: "Million Raised",
      description: "Total funding secured by community startups"
    }
  ];

  return (
    <section className="py-24 bg-gradient-earth relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Community <span className="text-green-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our community has accomplished together. From AI projects to successful VC pitches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <CountUp
                  from={0}
                  to={stat.number}
                  separator={stat.label.includes("Million") ? "." : ","}
                  duration={2}
                  className="text-4xl md:text-5xl font-bold text-green-600"
                />
                {stat.label.includes("Million") && (
                  <span className="text-4xl md:text-5xl font-bold text-green-600">M</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to build your next AI project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300">
              Join Community
            </button>
            <button className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityStats; 