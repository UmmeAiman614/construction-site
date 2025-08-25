import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/assets/slide1.webp",
    heading: "Building Your Dreams",
    description:
      "We provide innovative and reliable construction solutions for your future.",
    button: "Explore Projects",
  },
  {
    id: 2,
    image: "/assets/slide2.jpg",
    heading: "Quality & Trust",
    description:
      "Our commitment is to deliver excellence with every brick we lay.",
    button: "Learn More",
  },
  {
    id: 3,
    image: "/assets/slide3.webp",
    heading: "Sustainable Future",
    description:
      "We build with responsibility, ensuring safety and sustainability.",
    button: "Contact Us",
  },
];

// Motion Variants
const headingVariant = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const descVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 0.6 },
  },
};

const HomeSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();

  const handleSlideChange = async () => {
    await controls.start("hidden"); // reset
    controls.start("visible"); // trigger animation
  };

  return (
    <section ref={ref} className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-cream !opacity-70",
            bulletActiveClass:
              "swiper-pagination-bullet-active !bg-orange !scale-125 !border-2 !border-yellow",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={handleSlideChange}
          className="w-full h-[60vh] md:h-[70vh]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center text-cream h-full px-4">
                  {/* Heading */}
                  <motion.h1
                    variants={headingVariant}
                    initial="hidden"
                    animate={controls}
                    className="text-3xl md:text-5xl font-bold mb-4"
                  >
                    {slide.heading}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={descVariant}
                    initial="hidden"
                    animate={controls}
                    className="max-w-2xl text-base md:text-lg mb-6 text-cream/90"
                  >
                    {slide.description}
                  </motion.p>

                  {/* Button */}
                  <motion.a
                    variants={buttonVariant}
                    initial="hidden"
                    animate={controls}
                    href="#"
                    className="bg-orange hover:bg-yellow text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(228,74,40,0.7)]"
                  >
                    {slide.button}
                  </motion.a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default HomeSlider;
