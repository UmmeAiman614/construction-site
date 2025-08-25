// src/components/home/HomeBlog.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Sustainable Building Techniques",
    description:
      "Learn how modern construction incorporates sustainability to reduce environmental impact and increase efficiency.",
    image: "/assets/blog1.jpg",
  },
  {
    id: 2,
    title: "Top Construction Trends 2025",
    description:
      "Explore the latest trends in construction, from smart technology to eco-friendly materials and innovative designs.",
    image: "/assets/project-1.jpg",
  },
  {
    id: 3,
    title: "Project Management Tips",
    description:
      "Tips and best practices for managing construction projects efficiently and delivering high-quality results.",
    image: "/assets/project-2.jpg",
  },
];

const HomeBlog = () => {
  return (
    <section className="py-20 bg-cream overflow-x-hidden"> {/* ensure no horizontal scroll */}
      <div className="container mx-auto px-4 md:px-6"> {/* reduced px to prevent overflow */}
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown relative inline-block">
            Latest Blogs
            <span className="block w-16 h-1 bg-orange mx-auto mt-2 rounded-full"></span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-brown rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <img
  src={blog.image}
  alt={blog.title}
  className="w-full h-48 object-cover rounded-t-2xl block"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-white mb-4 text-sm">{blog.description}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-orange font-semibold hover:text-yellow transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
