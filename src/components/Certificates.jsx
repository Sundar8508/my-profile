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
    <section id="certificates" className="py-16 px-6 text-center bg-gray-50">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 border-b-4 border-blue-500 inline-block pb-2 tracking-wide">
          Certifications & Achievements
        </h1>
        <p className="mt-2 text-lg text-gray-700 font-medium">
          Verified credentials showcasing my expertise.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            ref={(el) => (certificateRefs.current[index] = el)}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 opacity-0 transform translate-x-[-50px] transition-transform duration-500 ease-out"
          >
            {/* Certificate Details */}
            <div className="w-full p-6 md:p-8 text-left">
              <h2 className="text-3xl font-bold text-gray-900 tracking-wide">{certificate.title}</h2>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                {certificate.description}
              </p>

              {/* View Certificate Button */}
              <a
                className="mt-6 inline-block bg-blue-600 text-white text-lg px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
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
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
}
