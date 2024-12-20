import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 text-center"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-8">
          Welcome to Our Homelab
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Where Technology Meets
          <span className="text-primary"> Design</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Explore our passion for creating sophisticated homelab setups that combine
          cutting-edge technology with elegant design principles.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Discover More
        </motion.button>
      </motion.div>
    </section>
  );
};