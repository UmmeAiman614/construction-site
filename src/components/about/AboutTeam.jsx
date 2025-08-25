// src/components/about/AboutTeam.jsx
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    image: "/assets/team-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Engineer",
    image: "/assets/team-2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Architect",
    image: "/assets/team-3.jpg",
  },
  {
    id: 4,
    name: "Emily White",
    role: "Designer",
    image: "/assets/team-4.jpg",
  },
];

const AboutTeam = () => {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading with underline */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-brown inline-block relative">
            Meet Our Team
            <span className="block w-20 h-1 bg-orange mt-2 mx-auto rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-brown mb-2">{member.name}</h3>
              <p className="text-orange mb-4">{member.role}</p>
              <div className="flex gap-4">
                <a href="#" className="text-brown hover:text-orange transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-brown hover:text-orange transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-brown hover:text-orange transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
