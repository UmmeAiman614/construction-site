// src/components/about/AboutExperience.jsx
import { motion } from "framer-motion";

const AboutExperience = () => {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Top Left Text */}
          <motion.div
            className="p-6 md:pr-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-5xl font-bold text-brown mb-4">
                <span className="text-orange">50</span> Years of Experience
              </h2>
              <p className="text-brown mb-4">
                Ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor ellendus.
              </p>
              <p className="text-brown mb-4">
                Our journey has been built on dedication, innovation, and trust. We constantly strive 
                to deliver the best services and solutions to our clients across all industries.
              </p>
              <button className="mt-4 px-6 py-2 bg-orange text-cream font-semibold rounded-lg hover:bg-brown transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/about-1.jpg"
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            className="w-full h-full -mt-12 md:-mt-16" // Move it up to meet top image
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/about-2.jpg"
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom Right Text */}
          <motion.div
            className="p-6 md:pl-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brown mb-4">
              Throughout our decades of experience, we have embraced challenges as opportunities for growth.
              Our team’s expertise ensures that every project is executed with precision and excellence.
            </p>
            <p className="text-brown mb-4">
              We believe in sustainable practices, innovative solutions, and building long-lasting 
              relationships with our clients and partners.
            </p>
            <button className="mt-4 px-6 py-2 bg-orange text-cream font-semibold rounded-lg hover:bg-brown transition">
              Contact Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
