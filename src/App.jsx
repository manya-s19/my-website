import { useEffect, useState } from "react";
import Projects from "./Components/Projects";

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">Manya</h1>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#hero" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 pt-20"
      >
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Manya 👋</h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            I build cool projects with code and design experiences people enjoy.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm passionate about technology, design, and solving problems with
            creative solutions. This portfolio is where I share my journey and
            showcase projects I'm proud of.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Stuff</h2>
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
        
        {/* Project One */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://aws.amazon.com/blogs/business-intelligence/amazon-quicksight-partners-with-stanfords-shtem-internship-to-empower-students-in-generative-ai-and-research/", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">AWS QuickSight Project</h3>
          <p className="text-gray-600 mb-4">
            Stanford SHTEM internship project empowering students in Gen AI & research.
          </p>
          <div className="text-blue-500 font-medium">View Project →</div>
        </div>

        {/* Project Two */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">
            This responsive portfolio built with React and modern design principles.
          </p>
          <div className="text-blue-500 font-medium">View Code →</div>
        </div>

        {/* Project Three */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">React Todo App</h3>
          <p className="text-gray-600 mb-4">
            A sleek task management app with drag-and-drop functionality and local storage.
          </p>
          <div className="text-blue-500 font-medium">View Demo →</div>
        </div>

        {/* Project Four */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">Weather Dashboard</h3>
          <p className="text-gray-600 mb-4">
            Real-time weather app with beautiful animations and location-based forecasts.
          </p>
          <div className="text-blue-500 font-medium">View Live →</div>
        </div>

        {/* Project Five */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">E-commerce Site</h3>
          <p className="text-gray-600 mb-4">
            Full-stack shopping platform with payment integration and admin dashboard.
          </p>
          <div className="text-blue-500 font-medium">View Store →</div>
        </div>

        {/* Duplication for safety */}
        {/* Project One Again */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://aws.amazon.com/blogs/business-intelligence/amazon-quicksight-partners-with-stanfords-shtem-internship-to-empower-students-in-generative-ai-and-research/", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">AWS QuickSight Project</h3>
          <p className="text-gray-600 mb-4">
            Stanford SHTEM internship project empowering students in Gen AI & research.
          </p>
          <div className="text-blue-500 font-medium">View Project →</div>
        </div>

        {/* Project Two Again */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">
            This responsive portfolio built with React and modern design principles.
          </p>
          <div className="text-blue-500 font-medium">View Code →</div>
        </div>

        {/* Project Three Again*/}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">React Todo App</h3>
          <p className="text-gray-600 mb-4">
            A sleek task management app with drag-and-drop functionality and local storage.
          </p>
          <div className="text-blue-500 font-medium">View Demo →</div>
        </div>

        {/* Project Four Again*/}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">Weather Dashboard</h3>
          <p className="text-gray-600 mb-4">
            Real-time weather app with beautiful animations and location-based forecasts.
          </p>
          <div className="text-blue-500 font-medium">View Live →</div>
        </div>

        {/* Project Five Again */}
        <div className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
             onClick={() => window.open("https://github.com", '_blank', 'noopener,noreferrer')}>
          <h3 className="text-2xl font-semibold mb-2">E-commerce Site</h3>
          <p className="text-gray-600 mb-4">
            Full-stack shopping platform with payment integration and admin dashboard.
          </p>
          <div className="text-blue-500 font-medium">View Store →</div>
        </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Whether you want to collaborate, ask a question, or just say hi,
            feel free to reach out!
          </p>
          <a
            href="mailto:manya@egmail.com"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;