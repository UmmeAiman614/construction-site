// src/components/home/Service.jsx
import { motion } from "framer-motion";
import { Hammer, Building2, Leaf, Wrench } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

const services = [
  {
    id: 1,
    title: "Construction",
    description: "High-quality construction services for residential and commercial projects.",
    image: "/assets/service1.jpg",
    icon: <Hammer size={28} />,
  },
  {
    id: 2,
    title: "Architecture",
    description: "Innovative architectural designs tailored to your needs.",
    image: "/assets/service2.jpg",
    icon: <Building2 size={28} />,
  },
  {
    id: 3,
    title: "Sustainability",
    description: "Eco-friendly building solutions for a greener future.",
    image: "/assets/service3.jpg",
    icon: <Leaf size={28} />,
  },
  {
    id: 4,
    title: "Repair & Maintenance",
    description: "Reliable repair and maintenance services for all types of buildings.",
    image: "/assets/project-2.jpg",
    icon: <Wrench size={28} />,
  },
  {
    id: 5,
    title: "Interior Design",
    description: "Creative interior designs to transform your spaces.",
    image: "/assets/service5.jpg",
    icon: <Building2 size={28} />,
  },
  {
    id: 6,
    title: "Consulting",
    description: "Expert advice to make your construction projects successful.",
    image: "/assets/service6.jpg",
    icon: <Hammer size={28} />,
  },
];

const Service = () => {
  return (
    <>
   
            <PageHeader
                title="Services"
                bgImage="/assets/page-header.jpg"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Services" } // last one has no path
                ]}
            />


    <section className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-brown text-center mb-12 relative inline-block">
          Our Services
          <span className="block w-20 h-1 bg-orange mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-cream flex flex-col items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative w-full h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                {/* Icon overlapping the bottom corner */}
                <div className="absolute -bottom-4 right-4 bg-orange p-3 rounded-full text-cream shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-brown mt-6 mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-brown mb-4">{service.description}</p>
              {/* View More link */}
              <a
                href="#"
                className="text-orange font-semibold hover:text-brown transition"
              >
                View More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Service;
