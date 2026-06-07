import { Link } from "react-router-dom";
import resumePDF from "../assets/resume/nandini_resume.pdf";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-violet-400 uppercase tracking-[0.3em] mb-6">
              Full Stack Developer
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
              NANDINI
            </h1>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-violet-500 leading-none mb-8">
              SHARMA
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Digital
              <br />
              Experiences
              <br />
              That Matter.
            </h2>

            <p className="text-gray-400 text-lg mt-8 max-w-xl leading-8">
              Full Stack Developer creating modern,
              responsive and user-focused web applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="bg-violet-600 px-8 py-4 rounded-xl hover:bg-violet-700 transition"
              >
                Resume
              </a>

              <Link
                to="/projects"
                className="border border-violet-500 px-8 py-4 rounded-xl hover:bg-violet-500 transition"
              >
                View Projects
              </Link>

            </div>

          </div>

         
          {/* RIGHT SIDE */}
          <div className="flex justify-center items-center h-125">

            <div className="relative w-112.5 h-112.5">

              {/* Glow */}
              <div className="absolute inset-0 bg-violet-600/20 blur-[120px] rounded-full"></div>

              {/* Outer Ring */}
              <div
                className="absolute inset-0 border border-violet-500/20 rounded-full animate-spin"
                style={{ animationDuration: "25s" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-violet-400 rounded-full"></div>
              </div>

              {/* Middle Ring */}
              <div
                className="absolute inset-12 border border-violet-500/15 rounded-full animate-spin"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-500 rounded-full"></div>
              </div>

              {/* Inner Ring */}
              <div
                className="absolute inset-24 border border-violet-500/10 rounded-full animate-spin"
                style={{ animationDuration: "12s" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-300 rounded-full"></div>
              </div>

              {/* Center Orb */}
              <div className="absolute top-1/2 left-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-violet-400 to-violet-700 shadow-[0_0_80px_rgba(139,92,246,0.6)]">
              </div>

            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default Hero;