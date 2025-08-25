import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  const usefulLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-brown text-cream py-12 px-6 md:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Column 1 - Logo + Description */}
        <div>
          <img src="/assets/footer-logo.png" alt="Logo" className="h-12 mb-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-cream/90"
          >
            We are dedicated to delivering top-quality construction services
            with innovation, safety, and sustainability at our core.
          </motion.p>
        </div>

        {/* Column 2 - Useful Links */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-semibold mb-4 text-yellow"
          >
            Useful Links
          </motion.h3>
          <ul className="space-y-2">
            {usefulLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-orange transition-colors"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Us */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-semibold mb-4 text-yellow"
          >
            Contact Us
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm"
          >
            📍 123 Main Street, City, Country
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm"
          >
            📞 +92 300 1234567
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm"
          >
            📧 info@company.com
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom small text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-10 text-xs text-cream/80"
      >
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
