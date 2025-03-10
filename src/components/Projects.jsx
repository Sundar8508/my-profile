import { useEffect, useRef } from "react";
import websiteimg1 from "../Images/coffero.png";
import websiteimg2 from "../Images/e-commerce.png";

export default function Projects() {
  const projects = [
    {
      image: websiteimg1,
      title: "Coffero - E-Commerce Coffee Shop",
      description:
        "A modern e-commerce platform with a sleek UI, built with React.js & Flask. Features secure payments, a responsive design, and an optimized user experience.",
      skills: ["React.js", "Flask", "Material UI", "MongoDB", "JavaScript", "Vercel"],
      link: "https://final-project-red-zeta.vercel.app/",
    },
    {
      image: websiteimg2,
      title: "Knowledge Bridge - Learning Platform",
      description:
        "A fully interactive learning platform where students can explore Java, Python, React, and more. Designed with a user-friendly interface and test score tracking.",
      skills: ["React.js", "Node.js", "Tailwind CSS", "JavaScript", "Stripe", "Netlify"],
      link: "https://lms-knowledgebridge.netlify.app/",
    },
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-left");
          } else {
            entry.target.classList.remove("fade-in-left");
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-16 px-6 text-center bg-gray-50">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold font-serif text-gray-900  inline-block pb-2 tracking-wide">
          Projects
        </h1>
        <p className="mt-2 text-lg text-gray-700 font-medium">
          Showcasing some of my best work.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 opacity-0 transform translate-x-[-50px] transition-transform duration-500 ease-out"
          >
            {/* Project Image */}
            <div className="w-full md:w-2/5 overflow-hidden">
              <img
                className="w-full h-48 object-cover rounded-lg shadow-md"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-3/5 p-8 text-left">
              <h2 className="text-3xl font-bold text-gray-900 tracking-wide">{project.title}</h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">{project.description}</p>

              {/* Skills Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-blue-700 border border-blue-500 text-sm font-semibold px-3 py-1 rounded-md shadow-black shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a
                className="mt-6 inline-block bg-blue-600 text-white text-lg px-6 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:bg-blue-900 hover:shadow-lg hover:scale-105"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .fade-in-left {
            opacity: 1 !important;
            transform: translateX(0) !important;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
}
