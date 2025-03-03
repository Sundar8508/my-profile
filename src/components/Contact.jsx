import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram, FaUser, FaCommentDots } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#f5f5f5] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full px-6 md:px-12 py-12 flex flex-col md:flex-row gap-12 bg-white shadow-xl rounded-lg">
        <div className="w-full md:w-1/3 space-y-6 text-gray-800">
          <h2 className="text-4xl font-bold text-[#3b5be8]">Contact Me</h2>
          <div>
            <p className="font-semibold">Phone Number</p>
            <p className="text-gray-600 flex items-center gap-2"><FaPhoneAlt /> +91 63829 80374</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-600 flex items-center gap-2"><FaEnvelope /> sundarm541@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Social Network</p>
            <div className="flex gap-4 text-gray-700 text-xl">
              <a href="http://www.linkedin.com/in/sundar-m85" className="hover:text-[#fe5617]"><FaLinkedin /></a>
              <a href="https://www.instagram.com/bros_vk?igsh=MWVyc3U3ajR3bGNkcw==" className="hover:text-[#fe5617]"><FaInstagram /></a>
              <a href="https://github.com/Sundar8508/final-project" className="hover:text-[#fe5617]"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-4 left-3 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 pl-10"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 pl-10"
              />
            </div>
            <div className="relative">
              <FaPhoneAlt className="absolute top-4 left-3 text-gray-500" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 pl-10"
              />
            </div>
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-3 text-gray-500" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 pl-10 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3b5be8] text-white py-3 rounded-md font-semibold hover:bg-[#2c49c5] transition-all duration-300 ease-in-out disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
            {success === true && (
              <p className="text-green-600 text-center font-semibold mt-2">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-red-600 text-center font-semibold mt-2">Failed to send the message. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
