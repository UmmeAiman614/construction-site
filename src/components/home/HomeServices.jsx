// src/components/home/HomeServices.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Hammer, Building2, Leaf, Wrench, Home } from "lucide-react";

const services = [
  {
    id: 1,
    image: "/assets/service1.jpg",
    icon: <Hammer size={34} className="text-orange" />,
    title: "Construction",
    description:
      "We provide reliable construction services with innovative solutions.",
    link: "#",
  },
  {
    id: 2,
    image: "/assets/service2.jpg",
    icon: <Building2 size={34} className="text-orange" />,
    title: "Architecture",
    description:
      "Creative and modern architectural designs tailored to your needs.",
    link: "#",
  },
  {
    id: 3,
    image: "/assets/service3.jpg",
    icon: <Leaf size={34} className="text-orange" />,
    title: "Sustainability",
    description:
      "Eco-friendly projects focused on sustainability and safety.",
    link: "#",
  },
  {
    id: 4,
    image: "/assets/service1.jpg",
    icon: <Wrench size={34} className="text-orange" />,
    title: "Maintenance",
    description:
      "Reliable maintenance services to keep your property in top condition.",
    link: "#",
  },
  {
    id: 5,
    image: "/assets/service2.jpg",
    icon: <Home size={34} className="text-orange" />,
    title: "Interior Design",
    description:
      "Modern and stylish interior solutions for homes and businesses.",
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const HomeServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-16 bg-cream overflow-x-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="container mx-auto px-4"
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-2">
            Our Services
          </h2>
          <p className="text-brown/70 max-w-xl mx-auto">
            Explore the wide range of services we provide to build your future.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-hidden" // ✅ prevent horizontal overflow
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                className="bg-brown rounded-2xl shadow-lg group relative overflow-hidden" // ✅ clips hover zoom
              >
                {/* Image wrapper */}
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Half in / half out icon */}
                  <div className="absolute bottom-0 left-6 translate-y-1/2 bg-cream border-2 border-orange rounded-full shadow-lg p-3">
                    {service.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="pt-12 pb-6 px-6 text-left">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-orange font-semibold hover:underline hover:text-yellow transition-colors"
                  >
                    See more →
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-8 gap-3"></div>
      </motion.div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: #FFD93D; /* yellow */
          opacity: 1;
          border: 2px solid #4F200D; /* brown border */
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #FF9A00; /* orange active */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default HomeServices;
