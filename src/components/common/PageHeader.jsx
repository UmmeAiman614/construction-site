// src/components/common/PageHeader.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageHeader = ({ title, bgImage, breadcrumbs = [] }) => {
  return (
    <section className="relative h-64 md:h-96 w-full overflow-hidden">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div className="flex gap-2 text-cream/80 text-sm md:text-base">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-yellow transition-colors duration-300"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-orange font-semibold">{crumb.label}</span>
              )}

              {/* Add arrow except for last item */}
              {index < breadcrumbs.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PageHeader;
