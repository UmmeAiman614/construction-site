// src/components/home/Projects.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";

const projects = [
    {
        id: 1,
        title: "Residential Complex",
        description: "Modern residential buildings with sustainable design.",
        image: "/assets/project-1.jpg",
    },
    {
        id: 2,
        title: "Commercial Office",
        description: "Innovative office spaces designed for productivity.",
        image: "/assets/project-2.jpg",
    },
    {
        id: 3,
        title: "Eco-friendly Homes",
        description: "Green homes built with energy-efficient materials.",
        image: "/assets/project3.jpg",
    },
    {
        id: 4,
        title: "Industrial Facility",
        description: "High-tech industrial buildings with smart layouts.",
        image: "/assets/project4.jpg",
    },
    {
        id: 5,
        title: "Luxury Villa",
        description: "Exclusive villas with premium design and finish.",
        image: "/assets/project5.jpg",
    },
    {
        id: 6,
        title: "Shopping Mall",
        description: "Spacious commercial malls with modern architecture.",
        image: "/assets/project6.jpg",
    },
    {
        id: 7,
        title: "Hospital Complex",
        description: "Efficient healthcare facilities with modern layouts.",
        image: "/assets/project7.jpg",
    },
    {
        id: 8,
        title: "Educational Campus",
        description: "Innovative school and university buildings.",
        image: "/assets/project8.jpg",
    },
];

const Projects = () => {
    return (
        <>
            
            <PageHeader
                title="Our Projects"
                bgImage="/assets/page-header.jpg"
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Projects" } // last one has no path
                ]}
            />

            <section className="py-20 bg-cream overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Heading with underline */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-brown inline-block relative">
                            Our Projects
                            <span className="block w-20 h-1 bg-orange mx-auto mt-2 rounded"></span>
                        </h2>
                    </div>

                    {/* Projects grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="bg-brown rounded-lg shadow-lg overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-white mb-4">{project.description}</p>
                                    <Link
                                        to={`/project-detail/${project.id}`}
                                        state={{ project }}
                                        className="text-orange font-semibold hover:text-yellow transition"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
