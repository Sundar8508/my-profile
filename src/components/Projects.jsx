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
      skills: ["React.js", "Flask", "Material UI", "MongoDB","JavaScript", "Vercel"],
      link: "http://final-project-dsz74b7o1-sundar8508s-projects.vercel.app",
    },
    {
      image: websiteimg2,
      title: "Knowledge Bridge - Learning Platform",
      description:
        "A fully interactive learning platform where students can explore Java, Python, React, and more. Designed with a user-friendly interface and test score tracking.",
      skills: ["React.js", "Node.js", "Tailwind CSS","Java script","Stripe","Netlify" ],
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
    <section id="projects" className="py-16 px-6 text-center">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
          Projects
        </h1>
        <p className="mt-2 text-lg text-gray-800">Showcasing some of my best work.</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 opacity-0 transform translate-x-[-50px] transition-transform duration-500 ease-out"
          >
            {/* Project Image (Left Side, Wider) */}
            <div className="w-full md:w-2/5 overflow-hidden">
              <img
                className="w-full h-48 object-cover rounded-lg shadow-md"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Project Details (Right Side) */}
            <div className="w-full md:w-3/5 p-8 text-left">
              <h2 className="text-3xl font-semibold text-gray-900">{project.title}</h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{project.description}</p>

              {/* Skills Section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white text-blue-600 border-2  text-sm font-semibold px-3 py-1 rounded-md shadow-black shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a
                className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-950 transition-all duration-300 ease-in-out"
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
