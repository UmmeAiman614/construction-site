// src/components/home/LatestProjects.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Residential Tower Project",
    description:
      "A modern high-rise residential tower featuring sustainable architecture, premium facilities, and advanced safety standards.",
    image: "/assets/project1.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Highway Construction",
    description:
      "A large-scale highway development connecting major cities with durable road infrastructure and smart traffic solutions.",
    image: "/assets/project1.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Bridge Engineering Project",
    description:
      "A mega bridge project designed to support heavy transportation, built with high-strength materials and innovative engineering.",
    image: "/assets/project1.jpg",
  },
];

const LatestProjects = () => {
  return (
    <section className="py-20 bg-cream relative overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown relative inline-block">
            Latest Projects
            <span className="block w-16 h-1 bg-orange mx-auto mt-2 rounded-full"></span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30} // ✅ reduced spacing
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            className="pb-16 !overflow-hidden"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="overflow-hidden">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Left Image */}
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl hover:scale-105 transition-transform duration-500 w-full"
                    />
                  </div>

                  {/* Right Content */}
                  <div>
                    <span className="text-7xl font-extrabold text-orange opacity-20 block mb-4">
                      {project.number}
                    </span>
                    <h3 className="text-3xl font-bold text-brown mb-4">
                      {project.title}
                    </h3>
                    <p className="text-brown mb-6">{project.description}</p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-block bg-orange text-cream px-6 py-2 rounded-xl shadow-md hover:bg-yellow hover:text-brown transition-all duration-300"
                    >
                      View More →
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="absolute -bottom-2 right-4 flex gap-4 z-10"> {/* ✅ adjusted position */}
              <div className="custom-prev w-12 h-12 bg-cream rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-yellow hover:text-brown transition-colors duration-300">
                &#8592;
              </div>
              <div className="custom-next w-12 h-12 bg-cream rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-yellow hover:text-brown transition-colors duration-300">
                &#8594;
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .swiper,
          .swiper-horizontal {
            overflow: hidden !important;
          }

          /* Pagination */
          .swiper-pagination {
            position: absolute !important;
            left: 0 !important;
            right: 0 !important;
            bottom: -28px !important;
            width: 100% !important;
            margin: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: auto;
          }

          .swiper-pagination-bullet {
            background: #4F200D;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            border: 2px solid #FF9A00;
            margin: 0 6px !important;
          }

          .swiper-pagination-bullet-active {
            background: #FF9A00;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default LatestProjects;
