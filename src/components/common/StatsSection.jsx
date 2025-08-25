// src/components/home/StatsSection.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Smile, Trophy } from "lucide-react"; // ✅ lucide-react icons

const stats = [
  { id: 1, icon: <Building2 size={40} />, target: 120, label: "Projects" },
  { id: 2, icon: <Users size={40} />, target: 80, label: "Clients" },
  { id: 3, icon: <Smile size={40} />, target: 150, label: "Happy Customers" },
  { id: 4, icon: <Trophy size={40} />, target: 25, label: "Awards" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1500; // ms
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  return (
    <section
      className="relative bg-brown text-cream py-20"
      style={{
        backgroundImage: "url('/assets/stats-bg.webp')", // ✅ keep inside public/assets
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <div className="text-yellow mb-3">{stat.icon}</div>
            <h2 className="text-4xl font-bold text-orange mb-2">
              <Counter target={stat.target} />+
            </h2>
            <p className="text-cream text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
