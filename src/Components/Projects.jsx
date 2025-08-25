import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollX = 0;
    const speed = 1; // pixels per frame, adjust to desired speed
    const totalWidth = container.scrollWidth / 2; // only need half (original set)

    const step = () => {
      if (!isHovered) {
        scrollX += speed;
        if (scrollX >= totalWidth) scrollX = 0;
        container.style.transform = `translateX(-${scrollX}px)`;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isHovered]);

  return (
    <section id="projects" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div
          className="flex"
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Original projects */}
          <ProjectCard
            title="AWS QuickSight Project"
            description="Stanford SHTEM internship project empowering students in generative AI and research."
            link="https://aws.amazon.com/blogs/business-intelligence/amazon-quicksight-partners-with-stanfords-shtem-internship-to-empower-students-in-generative-ai-and-research/"
          />
          <ProjectCard
            title="Portfolio Website"
            description="This responsive portfolio built with React and modern design principles."
            link="https://github.com"
          />
          <ProjectCard
            title="React Todo App"
            description="A sleek task management app with drag-and-drop functionality and local storage."
            link="https://github.com"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="Real-time weather app with beautiful animations and location-based forecasts."
            link="https://github.com"
          />
          <ProjectCard
            title="E-commerce Site"
            description="Full-stack shopping platform with payment integration and admin dashboard."
            link="https://github.com"
          />

          {/* Duplicate for seamless scrolling */}
          <ProjectCard
            title="AWS QuickSight Project"
            description="Stanford SHTEM internship project empowering students in generative AI and research."
            link="https://aws.amazon.com/blogs/business-intelligence/amazon-quicksight-partners-with-stanfords-shtem-internship-to-empower-students-in-generative-ai-and-research/"
          />
          <ProjectCard
            title="Portfolio Website"
            description="This responsive portfolio built with React and modern design principles."
            link="https://github.com"
          />
          <ProjectCard
            title="React Todo App"
            description="A sleek task management app with drag-and-drop functionality and local storage."
            link="https://github.com"
          />
          <ProjectCard
            title="Weather Dashboard"
            description="Real-time weather app with beautiful animations and location-based forecasts."
            link="https://github.com"
          />
          <ProjectCard
            title="E-commerce Site"
            description="Full-stack shopping platform with payment integration and admin dashboard."
            link="https://github.com"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div
      className="flex-shrink-0 w-96 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 mr-8"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-blue-500 font-medium">View Project →</div>
    </div>
  );
}