import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./assets/logo.png"; // place your uploaded logo in src/assets

export default function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#f8f5ec] min-h-screen flex flex-col items-center justify-center text-center px-6">
        <img src={Logo} alt="Block by Block Tutoring Logo" className="w-40 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blockPink">
          Block by Block Tutoring
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-6">
          Building confidence and knowledge, one block at a time. Personalized tutoring to help students excel in math, science, and beyond.
        </p>
        <a
          href="#contact"
          className="bg-blockBlue text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-blockGreen transition"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blockGold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 mb-4">
              At Block by Block Tutoring, we believe learning should be engaging, empowering, 
              and tailored to each student’s needs. Our tutors use proven strategies 
              to make challenging subjects easier to understand.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customized learning plans</li>
              <li>Flexible scheduling options</li>
              <li>Experienced and friendly tutors</li>
              <li>Support across math, science, and more</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76d"
              alt="Tutoring session"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f8f5ec] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blockPink mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Math Tutoring", desc: "From fractions to calculus, we make math approachable." },
              { title: "Science Support", desc: "Physics, Chemistry, Biology – we break it down step by step." },
              { title: "Study Skills", desc: "Time management, note-taking, and exam prep strategies." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blockBlue mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blockGreen mb-6">Get in Touch</h2>
          <p className="mb-6 text-gray-700">
            Ready to start your learning journey? Book a free consultation today!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-xl"
              rows="4"
            />
            <button
              type="submit"
              className="bg-blockGold text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-blockPink transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blockBlue text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Block by Block Tutoring. All rights reserved.</p>
      </footer>
    </div>
  );
}