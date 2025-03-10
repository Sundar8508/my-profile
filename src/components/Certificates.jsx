import { useEffect, useRef } from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Certified in Python Full-Stack Development",
      description:
        "Earned certification in Python Full-Stack development, covering React, state management, and backend integration. Demonstrated expertise in building scalable web applications.",
      link: "https://drive.google.com/file/d/1CNmtm4fBZAlkZuI24wloF7NlyHq8pmmU/view?usp=drivesdk"
    },
    {
      title: "College Internship Certificate",
      description:
        "Completed an extensive internship focused on IoT-based projects, gaining hands-on experience in sensor integration, real-time data processing, and cloud-based applications.",
      link: "https://drive.google.com/file/d/1FbrWFUUBuhNvjVb9n36g1Zd3dgVGucjY/view?usp=drivesdk"
    }
  ];

  const certificateRefs = useRef([]);

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

    certificateRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      certificateRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="certificates" className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-600 inline-block pb-3 tracking-wide font-sans">
          Certifications & Achievements
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-medium max-w-2xl mx-auto font-serif">
          Showcasing my verified credentials in development & technology.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            ref={(el) => (certificateRefs.current[index] = el)}
            className="certificate-card flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-300 p-8 opacity-0 transform translate-x-[-50px] transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            {/* Left Side - Certificate Info */}
            <div className="w-full text-left">
              <h2 className="text-2xl font-bold text-gray-900 tracking-wide font-sans">{certificate.title}</h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed font-serif">{certificate.description}</p>

              {/* View Certificate Button */}
              <a
                className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-110 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ease-in-out"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
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
            transition: transform 0.7s ease-out, opacity 0.7s ease-out;
          }

          .certificate-card {
            border-radius: 20px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.5s ease-in-out;
          }

          .certificate-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </section>
  );
}
