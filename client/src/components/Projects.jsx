import productImg from "../assets/projects/productr.jpeg";
import newshubImg from "../assets/projects/newshub.png";
import inotebookImg from "../assets/projects/inotebook.jpeg";
import textutilsImg from "../assets/projects/textutils.jpeg";

const Projects = () => {
return ( <div className="pt-28 pb-20"> <section className="max-w-7xl mx-auto px-6"> <p className="text-violet-400 uppercase tracking-widest">
My Work </p>


    <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-12">
      Featured Projects
    </h1>

    {/* Productr */}
    <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-violet-500/20 shadow-[10px_10px_0px_#6d28d9] mb-12 hover:-translate-y-2 transition-all duration-500">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="overflow-hidden">
          <img
            src={productImg}
            alt="Productr"
            className="w-full h-75 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-8">
          <p className="text-violet-400 mb-2">
            Featured Project
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Productr
          </h2>

          <p className="text-gray-300 mb-6">
            MERN Product Management System with authentication and CRUD operations.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full">
              React
            </span>

            <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full">
              Node.js
            </span>

            <span className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full">
              MongoDB
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/nandinisharma2314/productr.git"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 border border-violet-500 rounded-lg hover:bg-violet-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://productr-w95r.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* NewsHub + iNotebook */}
    <div className="grid md:grid-cols-2 gap-10 mb-12">

      {/* NewsHub */}
      <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-violet-500/20 shadow-[8px_8px_0px_#6d28d9] hover:-translate-y-2 transition-all duration-500">

        <div className="overflow-hidden">
          <img
            src={newshubImg}
            alt="NewsHub"
            className="w-full h-55 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">
            NewsHub
          </h2>

          <p className="text-gray-400 mt-3">
            News application powered by real-time APIs.
          </p>

          <div className="flex gap-3 mt-5">
            <a
              href="https://github.com/nandinisharma2314/Newshub.git"
              className="border border-violet-500 px-4 py-2 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://newshub-1.vercel.app/"
              className="bg-violet-600 px-4 py-2 rounded-lg"
            >
              Demo
            </a>
          </div>
        </div>
      </div>

      {/* iNotebook */}
      <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-violet-500/20 shadow-[8px_8px_0px_#6d28d9] hover:-translate-y-2 transition-all duration-500">

        <div className="overflow-hidden">
          <img
            src={inotebookImg}
            alt="iNotebook"
            className="w-full h-55 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">
            iNotebook
          </h2>

          <p className="text-gray-400 mt-3">
            MERN notes application with secure authentication.
          </p>

          <div className="flex gap-3 mt-5">
            <a
              href="https://github.com/nandinisharma2314/inotebook.git"
              className="border border-violet-500 px-4 py-2 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://inotebook-mu-six.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-violet-600 px-4 py-2 rounded-lg"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* TextUtils */}
    <div className="group bg-slate-900 rounded-3xl overflow-hidden border border-violet-500/20 shadow-[10px_10px_0px_#6d28d9] hover:-translate-y-2 transition-all duration-500">

      <div className="grid lg:grid-cols-2 items-center">

        <div className="overflow-hidden">
          <img
            src={textutilsImg}
            alt="TextUtils"
            className="w-full h-75 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-8">
          <p className="text-violet-400 mb-2">
            React Project
          </p>

          <h2 className="text-4xl font-bold mb-4">
            TextUtils
          </h2>

          <p className="text-gray-300 mb-6">
            Text formatting and transformation utility built with React.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/nandinisharma2314/TextUtils.git"
              className="px-5 py-3 border border-violet-500 rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://text-utils-n8vz.vercel.app/"
              className="px-5 py-3 bg-violet-600 rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>

  </section>
</div>


);
};

export default Projects;
