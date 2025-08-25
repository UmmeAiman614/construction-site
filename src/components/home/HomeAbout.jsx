// src/components/home/HomeAbout.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-orange font-semibold uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-brown mb-4">
            Building Dreams, Shaping Future
          </h2>
          <p className="text-brown mb-6">
            We are a leading construction company with years of experience 
            delivering high-quality projects. From design to execution, 
            our team ensures every detail is handled with precision, 
            professionalism, and care.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange text-cream px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow hover:text-brown transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>

        {/* Right Image with Decorative Border */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative w-full max-w-lg mx-auto"
        >
          {/* Image */}
          <img
            src="/assets/home-about.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg relative z-10"
          />

          {/* Border effect (right + bottom only) */}
          <div className="absolute right-[-15px] bottom-[-15px] w-full h-full border-r-4 border-b-4 border-orange rounded-2xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
