import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPython, FaGit, FaGithub, 
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiExpress, SiPostman, SiCanva, SiVercel, SiNetlify
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-16 px-10 bg-white text-center">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif font-semibold text-gray-800 mb-10 tracking-wide">
          About Me
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed font-serif">
          Hi there! I'm <span className="font-extrabold">Sundar</span>, a passionate 
          <span className="text-blue-700 font-bold">Python Full-Stack Developer</span> skilled in 
          <span className="text-blue-700 font-bold"> React, Node.js, Flask,</span> and 
          <span className="text-blue-700 font-bold"> MongoDB</span>. I specialize in building dynamic, 
          <span className="font-bold"> scalable web applications</span> while continuously learning and improving.
        </p>

        {/* Additional Bio Details */}
        <p className="text-gray-800 max-w-3xl mx-auto font-serif mt-8">
          I graduated in 2024 with a degree in Computer Technology. I have led 
          <span className="font-semibold text-gray-900"> tech teams</span>, presented at  
          <span className="font-semibold text-gray-900"> hackathons & conferences</span>, and contributed to  
          <span className="font-medium text-gray-900"> open-source projects</span>.  
          I have built and deployed multiple projects, including 
          <span className="font-bold text-blue-700"> Coffero</span> (a coffee shop website) &  
          <span className="font-bold text-blue-700"> Knowledge Bridge</span> (an online course platform), ensuring seamless user experience and backend efficiency.
        </p>
        <p className="text-gray-950 max-w-3xl mx-auto mt-6 font-semibold">
          I'm always excited to work on new projects and collaborate with like-minded developers. Let's connect and create something amazing!
        </p>
      </div>

      {/* Skills Section */}
      <section id="skills" className="mt-20">
        <h1 className="text-5xl font-serif font-semibold text-gray-800 mb-14 tracking-wide">
          My Skills
        </h1>

        {/* Skill Boxes Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCategory title="FRONTEND" skills={[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
          ]} />

          <SkillCategory title="BACKEND" skills={[
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <FaPython />, name: "Python" },
          ]} />

          <SkillCategory title="TOOLS & SERVICES" skills={[
            { icon: <FaGit />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiCanva />, name: "Canva" },
            { icon: <SiVercel />, name: "Vercel" },
            { icon: <SiNetlify />, name: "Netlify" },
          ]} />
        </div>
      </section>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="border border-gray-400 rounded-3xl p-6 shadow-lg bg-white">
      <h3 className="text-xl font-semibold mb-6 text-gray-900 uppercase tracking-wide">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-3 border border-gray-400 px-4 py-2 rounded-2xl shadow-md text-gray-900 
      hover:bg-gray-900 hover:text-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105">
      <span className="text-xl">{icon}</span>
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
};

export default About;