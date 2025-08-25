import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/common/PageHeader";
import BlogSidebar from "../components/common/BlogSidebar";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Innovations in Modern Architecture",
      description:
        "Explore how modern architecture is transforming urban spaces with innovative designs, sustainable practices, and futuristic concepts.",
      image: "/assets/project1.jpg",
    },
    {
      id: 2,
      title: "Renovation Trends of 2025",
      description:
        "Discover the latest renovation trends that are shaping homes and offices in 2025, blending functionality with style.",
      image: "/assets/project-2.jpg",
    },
    {
      id: 3,
      title: "The Future of Concrete Supply",
      description:
        "An in-depth look at the advancements in concrete technology and supply chain solutions for the construction industry.",
      image: "/assets/project3.jpg",
    },
    {
      id: 4,
      title: "Laminate Flooring Designs",
      description:
        "From rustic wood textures to sleek modern finishes, laminate flooring continues to evolve with endless design possibilities.",
      image: "/assets/project4.jpg",
    },
    {
      id: 5,
      title: "Consulting for Mega Projects",
      description:
        "How expert consulting helps streamline planning, risk management, and execution in mega construction projects worldwide.",
      image: "/assets/project5.jpg",
    },
    {
      id: 6,
      title: "Interior Design Inspirations",
      description:
        "Creative interior design inspirations to transform residential and commercial spaces with elegance and practicality.",
      image: "/assets/project6.jpg",
    },
  ];

  return (
    <>
      <PageHeader
        title="Blog"
        bgImage="/assets/page-header.jpg"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Blog Content Layout */}
      <section className="py-16 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <BlogSidebar />
          </motion.aside>

          {/* Blog List */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }} // ✅ same as Projects.jsx
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-brown mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-brown/80 mb-4 flex-grow">
                      {blog.description}
                    </p>
                    <Link
                      to={`/blog/${blog.id}`}
                      state={{ blog }}
                      className="inline-block mt-auto bg-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }} // ✅ faster
              className="flex justify-center items-center space-x-2 pt-8"
            >
              <button className="px-4 py-2 rounded-lg bg-brown text-cream hover:bg-orange transition">
                1
              </button>
              <button className="px-4 py-2 rounded-lg bg-cream border border-brown text-brown hover:bg-orange hover:text-white transition">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-cream border border-brown text-brown hover:bg-orange hover:text-white transition">
                3
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
