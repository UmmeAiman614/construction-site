// src/pages/ProjectDetail.jsx
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";

const projectInfo = [
  { label: "Client", value: "RRS Company" },
  { label: "Location", value: "San Francisco" },
  { label: "Area(sf)", value: "550,000 sf" },
  { label: "Year", value: "2019" },
  { label: "Budget", value: "$245,000,000" },
  { label: "Architect", value: "Scott & Austin" },
  { label: "Sector", value: "Tunnel, Transport" },
  { label: "Project Manager", value: "John Williams" },
  { label: "Structural Engineer", value: "DesignTech Engineering" },
];

const relatedImages = [
  "/assets/project1.jpg",
  "/assets/project-2.jpg",
  "/assets/project3.jpg",
  "/assets/project4.jpg",
  "/assets/project5.jpg",
  "/assets/project6.jpg",
];

const ProjectDetail = () => {
  const location = useLocation();
  const { project } = location.state || {};

  if (!project) return <p className="text-center mt-20">Project not found.</p>;

  return (
    <>
      <PageHeader
        title="Project Detail"
        bgImage="/assets/page-header.jpg"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Projects", path: "/project" },
          { label: "Project Detail" }
        ]}
      />

      <section className="py-20 bg-cream overflow-hidden">
        <div className="container mx-auto px-6">

          {/* Top Image */}
          <motion.div
            className="w-full mb-12 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 object-cover rounded-lg"
            />
          </motion.div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

            {/* Left Column - Project Info */}
            <motion.div
              className="bg-brown text-cream p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Project Information</h3>
              {projectInfo.map((item, index) => (
                <div key={index} className="mb-4">
                  <p>
                    <span className="font-semibold">{item.label}:</span> {item.value}
                  </p>
                  <hr className="border-cream/50 mt-1" />
                </div>
              ))}
            </motion.div>

            {/* Right Column - Project Description */}
            <motion.div
              className="p-6 rounded-lg shadow-lg bg-cream border border-brown"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-brown mb-4">{project.title} - Details</h3>
              <p className="text-brown text-sm md:text-base mb-4">
                This project showcases a modern approach to urban construction, combining functionality with sustainable design.
                The team used innovative construction techniques and high-quality materials to ensure durability and aesthetic appeal.
                Every aspect of the design was carefully planned to optimize space, energy efficiency, and user experience.
              </p>
              <p className="text-brown text-sm md:text-base mb-4">
                The project involved extensive collaboration among architects, engineers, and project managers.
                Key challenges included meeting tight deadlines while maintaining high standards of safety and quality.
                Advanced project management tools were used to track progress, manage resources, and communicate with stakeholders.
              </p>
              <p className="text-brown text-sm md:text-base">
                Overall, this project serves as a benchmark for excellence in construction, combining modern technology, design innovation, and professional execution to achieve remarkable results.
              </p>
            </motion.div>
          </div>

          {/* Related Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedImages.map((img, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
