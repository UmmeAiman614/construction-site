// src/pages/BlogDetail.jsx
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, Send, User } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import BlogSidebar from "../components/common/BlogSidebar";

const blogDescription = `
Construction projects today demand a perfect balance of innovation, safety, and sustainability. 
Modern construction focuses on using durable materials, advanced machinery, and energy-efficient designs 
that reduce environmental impact. Engineers and architects work hand in hand to deliver 
structures that are both functional and visually appealing. 
Quality control remains the backbone of every project, ensuring timelines are met without 
compromising on safety standards. Each phase of the project requires detailed planning, 
risk assessment, and resource management. Collaboration among stakeholders plays a vital role 
in overcoming challenges and delivering successful outcomes. 
Ultimately, construction is not just about building structures—it is about creating lasting value 
for communities and future generations.
`;

const comments = [
  {
    id: 1,
    name: "John Doe",
    text: "Great insights! I really like how you explained the importance of safety standards in construction.",
    avatar: "/assets/team-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    text: "This article highlights the future of sustainable construction very well. Keep it up!",
    avatar: "/assets/team-2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    text: "Impressive explanation, I especially liked the part about collaboration among stakeholders.",
    avatar: "/assets/team-3.jpg",
  },
];

const BlogDetail = () => {
  const location = useLocation();
  const { blog } = location.state || {};

  if (!blog) return <p className="text-center mt-20">Blog not found.</p>;

  return (
    <>
      <PageHeader
        title="Blog Detail"
        bgImage="/assets/page-header.jpg"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: "Blog Detail" },
        ]}
      />

      <section className="py-20 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Blog Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Blog Image */}
            <motion.div
              className="w-full rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </motion.div>

            {/* Blog Title + Description */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-brown mb-6">{blog.title}</h2>
              <p className="text-brown leading-relaxed whitespace-pre-line">
                {blogDescription}
              </p>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-brown mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-orange-500" />
                Comments
              </h3>
              <div className="space-y-6">
                {comments.map((c) => (
                  <div key={c.id} className="flex gap-4 items-start">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div className="bg-cream p-4 rounded-lg shadow">
                      <p className="font-semibold text-brown">{c.name}</p>
                      <p className="text-brown/80">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comment Form */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-brown mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-orange-500" />
                Leave a Comment
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Your Comment"
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow text-brown rounded-lg flex items-center gap-2 hover:bg-orange-600 transition"
                >
                  <Send className="w-5 h-5" /> Post Comment
                </button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
