import PageHeader from "../components/common/PageHeader";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        bgImage="/assets/page-header.jpg"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact" }
        ]}
      />

      {/* Contact Section */}
      <section className="py-20 bg-cream overflow-x-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-brown">Get In Touch</h2>
            <p className="text-brown/80">
              Have questions or want to discuss a project? We’d love to hear from you.
              Reach out using the form or contact details below.
            </p>
            <div className="space-y-3">
              <p><span className="font-semibold text-orange">Phone:</span> +92 300 1234567</p>
              <p><span className="font-semibold text-orange">Email:</span> info@construction.com</p>
              <p><span className="font-semibold text-orange">Address:</span> 123 Main Street, Lahore, Pakistan</p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-brown text-cream p-8 rounded-2xl shadow-lg space-y-4"
          >
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg text-brown focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg text-brown focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg text-brown focus:outline-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange hover:bg-yellow text-brown font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
