import { motion } from "framer-motion";

const setups = [
  {
    title: "Network Operations Center",
    description: "24/7 monitoring and management setup with multiple displays",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Server Rack Paradise",
    description: "Custom-built server rack with enterprise-grade equipment",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Development Workspace",
    description: "Clean and minimal development environment setup",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

export const FeaturedSetups = () => {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Setups</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted homelab environments, where every detail
            is considered and every component serves a purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {setups.map((setup, index) => (
            <motion.div
              key={setup.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl glass hover-card">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={setup.image}
                    alt={setup.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{setup.title}</h3>
                  <p className="text-muted-foreground">{setup.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};