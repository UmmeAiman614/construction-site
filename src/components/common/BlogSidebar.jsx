// src/components/blog/BlogSidebar.jsx
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const categories = [
  "Renovation",
  "Architecture",
  "Concrete Supply",
  "Laminate Flooring",
  "Consulting",
  "Interior Design",
  "Project Planning",
];

const recentPosts = [
  {
    id: 1,
    image: "/assets/blog1.jpg",
    title: "5 Tips for Successful Renovation",
    date: "Aug 10, 2025",
  },
  {
    id: 2,
    image: "/assets/blog2.jpg",
    title: "Modern Architecture Trends",
    date: "Jul 28, 2025",
  },
  {
    id: 3,
    image: "/assets/blog3.jpg",
    title: "Choosing the Right Flooring",
    date: "Jul 15, 2025",
  },
];

const tags = [
  "Renovation",
  "Architecture",
  "Concrete",
  "Flooring",
  "Consulting",
  "Interior",
  "Planning",
];

// Parent (staggered animation like Blog.jsx & Projects.jsx)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Child item animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogSidebar = () => {
  return (
    <motion.aside
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Search Bar */}
      <motion.div
        className="bg-brown p-6 rounded-xl shadow-lg"
        variants={itemVariants}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-cream text-brown placeholder-brown/70 focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 text-brown w-5 h-5" />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="bg-brown p-6 rounded-xl shadow-lg"
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold text-yellow mb-4 underline">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx} className="text-cream">
              <span className="hover:text-orange cursor-pointer transition">
                {cat}
              </span>
              {idx !== categories.length - 1 && (
                <hr className="my-2 border-cream/30" />
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        className="bg-brown p-6 rounded-xl shadow-lg"
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold text-yellow mb-4 underline">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-lg shadow-md"
              />
              <div>
                <p className="text-cream font-semibold hover:text-orange cursor-pointer transition">
                  {post.title}
                </p>
                <span className="text-cream/70 text-sm">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        className="bg-brown p-6 rounded-xl shadow-lg"
        variants={itemVariants}
      >
        <h3 className="text-xl font-bold text-yellow mb-4 underline">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-cream text-brown text-sm font-medium hover:bg-orange hover:text-cream transition cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default BlogSidebar;
