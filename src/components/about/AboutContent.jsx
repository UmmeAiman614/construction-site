// src/components/about/AboutContent.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <section className="py-20 bg-cream overflow-x-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          className="overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/assets/about-image.jpg"
            alt="About Us"
            className="rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-brown mb-4">About Us</h2>
          <h3 className="text-2xl font-semibold text-orange mb-4">Building Dreams with Quality</h3>
          <p className="text-brown mb-6">
            We are a leading construction company committed to delivering top-quality projects
            that exceed our clients' expectations. Our experienced team ensures precision,
            safety, and efficiency in every project.
          </p>
          <Link
            to="/services"
            className="inline-block bg-orange text-cream px-6 py-3 rounded-xl shadow-md hover:bg-yellow hover:text-brown transition-all duration-300"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
