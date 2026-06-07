import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaNodeJs,
FaGitAlt,
FaGithub,
} from "react-icons/fa";

import {
SiExpress,
SiMongodb,
SiTailwindcss,
SiPython,
SiMysql,
} from "react-icons/si";

const skills = [
{ name: "HTML", icon: <FaHtml5 size={40} /> },
{ name: "CSS", icon: <FaCss3Alt size={40} /> },
{ name: "JavaScript", icon: <FaJs size={40} /> },
{ name: "React", icon: <FaReact size={40} /> },
{ name: "Node.js", icon: <FaNodeJs size={40} /> },
{ name: "Express.js", icon: <SiExpress size={40} /> },
{ name: "MongoDB", icon: <SiMongodb size={40} /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
{ name: "Python", icon: <SiPython size={40} /> },
{ name: "SQL", icon: <SiMysql size={40} /> },
{ name: "Git", icon: <FaGitAlt size={40} /> },
{ name: "GitHub", icon: <FaGithub size={40} /> },
];

const certifications = [
"JavaScript Hackathon - HackerRank",
"Masters in Communication - Udemy",
"TCS MasterCraft DataPlus Overview Course",
];

const About = () => {
return ( <div className="bg-slate-950 text-white">

```
  {/* ABOUT */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <p className="text-violet-400 uppercase tracking-widest">
      Introduction
    </p>

    <h1 className="text-5xl md:text-6xl font-bold mt-3">
      About Me
    </h1>

    <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">

      <div className="space-y-6 text-gray-300 leading-8 text-lg">
        <p>
          I'm a Full Stack Developer passionate about building modern,
          scalable and user-focused web applications.
        </p>

        <p>
          I enjoy transforming ideas into real-world digital solutions
          using React, Node.js, Express.js and MongoDB while creating
          clean user experiences and efficient backend systems.
        </p>

        <p>
          Alongside web development, I have a strong interest in
          Data Analytics and enjoy working with Python, SQL and
          data-driven technologies.
        </p>

        <p>
          My goal is to continuously improve as a developer while
          building impactful products that combine technology,
          creativity and problem solving.
        </p>
      </div>

      <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8 hover:border-violet-500 transition-all duration-300">

        <h2 className="text-3xl font-bold">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-4 leading-7">
          Focused on building modern web applications using MERN Stack
          technologies and creating data-driven solutions.
        </p>

        <div className="mt-8 space-y-4">

          <div className="border-b border-slate-700 pb-3">
            Frontend Development
          </div>

          <div className="border-b border-slate-700 pb-3">
            Backend Development
          </div>

          <div className="border-b border-slate-700 pb-3">
            Data Analytics
          </div>

          <div>
            Problem Solving
          </div>

        </div>

      </div>

    </div>

  </section>

  {/* STATS */}
  <section className="max-w-7xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-bold text-violet-400">
          4+
        </h3>
        <p className="text-gray-400 mt-2">
          Projects Built
        </p>
      </div>

      <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-bold text-violet-400">
          12+
        </h3>
        <p className="text-gray-400 mt-2">
          Technologies
        </p>
      </div>

      <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-8 text-center">
        <h3 className="text-4xl font-bold text-violet-400">
          3+
        </h3>
        <p className="text-gray-400 mt-2">
          Certifications
        </p>
      </div>

    </div>

  </section>

  {/* SKILLS */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-4xl font-bold mb-12">
      Skills
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-slate-900/60 border border-violet-500/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
        >
          <div className="text-violet-400">
            {skill.icon}
          </div>

          <h3 className="font-medium">
            {skill.name}
          </h3>
        </div>
      ))}

    </div>

  </section>

  {/* EDUCATION */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-4xl font-bold mb-12">
      Education
    </h2>

    <div className="bg-slate-900/60 border border-violet-500/20 rounded-3xl p-10 hover:border-violet-500 transition-all duration-300">

      <span className="inline-block px-4 py-2 bg-violet-500/10 text-violet-400 rounded-full text-sm">
        2023 - 2026
      </span>

      <h3 className="text-3xl font-bold mt-6">
        Bachelor of Computer Applications
      </h3>

      <p className="text-violet-400 mt-2">
        Data Analytics
      </p>

      <p className="text-gray-400 mt-4">
        Amity University, Noida
      </p>

      <p className="text-gray-300 mt-6 leading-8">
        Pursuing a Bachelor of Computer Applications with specialization
        in Data Analytics, focusing on Full Stack Development,
        Database Management and Software Engineering.
      </p>

      <div className="flex flex-wrap gap-3 mt-8">

        <span className="px-4 py-2 bg-slate-800 rounded-xl">
          Full Stack Development
        </span>

        <span className="px-4 py-2 bg-slate-800 rounded-xl">
          Data Analytics
        </span>

        <span className="px-4 py-2 bg-slate-800 rounded-xl">
          Database Management
        </span>

        <span className="px-4 py-2 bg-slate-800 rounded-xl">
          Software Development
        </span>

      </div>

    </div>

  </section>

  {/* CERTIFICATIONS */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-4xl font-bold mb-12">
      Certifications
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-slate-900/60 border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="font-medium text-lg">
            {cert}
          </h3>
        </div>
      ))}

    </div>

  </section>

</div>


);
};

export default About;
