import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // 1. Send Email
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // 2. Save to MongoDB
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to save message");
    }

    setStatus("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 4000);

  } catch (error) {
    console.error(error);
    setStatus("Failed to send message.");
  }
};
  return (
    <section className="max-w-7xl mx-auto">
      <p className="text-violet-400 uppercase tracking-widest">
        Get In Touch
      </p>

      <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-4">
        Let's Connect
      </h1>

      <p className="text-gray-400 max-w-2xl mb-16">
        I'm always interested in discussing new opportunities,
        collaborations, or innovative projects. Feel free to reach out.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">

            <a
              href="mailto:nandinisharma142004@gmail.com"
              className="flex items-center gap-4 hover:text-violet-400 transition"
            >
              <FaEnvelope className="text-2xl text-violet-400" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/nandinisharma2314"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-violet-400 transition"
            >
              <FaGithub className="text-2xl text-violet-400" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nandini8529/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-violet-400 transition"
            >
              <FaLinkedin className="text-2xl text-violet-400" />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send Message
          </h2>

          {status && (
            <div
              className={`mb-6 px-4 py-3 rounded-xl ${
                status.includes("successfully")
                  ? "bg-green-500/10 border border-green-500 text-green-400"
                  : "bg-red-500/10 border border-red-500 text-red-400"
              }`}
            >
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-violet-500 resize-none"
            />

            <button
              type="submit"
              className="bg-violet-600 px-8 py-3 rounded-xl hover:bg-violet-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
