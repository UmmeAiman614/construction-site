// src/components/home/Testimonial.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/testimonial1.jpg",
    text: "This construction company exceeded our expectations! Professional team and timely delivery.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/assets/testimonial2.jpg",
    text: "Outstanding work! They brought our project vision to life with incredible attention to detail.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/assets/testimonial3.jpg",
    text: "Highly recommend! Efficient, reliable, and the quality of work is top-notch.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-brown overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-cream mb-12 relative inline-block">
          Testimonials
          <span className="block w-16 h-1 bg-orange mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Swiper wrapper */}
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            spaceBetween={30}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="flex flex-col items-center text-center px-6 md:px-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-orange mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-cream mb-2">{testimonial.name}</h3>
                  <p className="text-cream text-sm md:text-base">{testimonial.text}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination below */}
          <div className="custom-pagination mt-8 flex justify-center"></div>
        </div>
      </div>

      {/* Custom pagination styles */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #FFD93D;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
            border-radius: 50%;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #FF9A00;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonial;
