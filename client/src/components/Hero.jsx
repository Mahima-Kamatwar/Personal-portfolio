
// import React from "react";

// const Hero = () => {
//   return (

// <section
//         id="home"
//         className="min-h-screen bg-accent flex items-center pt-24"
//       >
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div className="bg-highlight p-8 md:p-10 rounded-xl shadow-lg">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary">
//               Hi, I'm Mahima
//             </h1>

//             <h2 className="text-xl md:text-2xl mt-4 text-secondary">
//               Professional MERN Stack Web Developer
//             </h2>

//             <p className="mt-6 text-base md:text-lg leading-relaxed">
//               I build scalable, secure, and high-performance web applications
//               with clean UI and strong backend logic using modern technologies.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <a href="#projects" className="btn-primary">View Work</a>
//               <a
//                 href="#contact"
//                 className="border border-secondary px-6 py-3 rounded-lg hover-bg-secondary hover:text-light transition"
//               >
//                 Hire Me
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
//             <img src="/web.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
//             <img src="/web2.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
//             <img src="/web3.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md sm:col-span-2" />
//           </div>
//         </div>
//       </section>
//   )}
//   export default Hero
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-accent flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="bg-highlight p-10 rounded-2xl shadow-xl">

          {/* Role badge */}
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary text-highlight text-sm font-medium">
            MERN Stack Web Developer
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Hi, I’m <span className="text-secondary">Mahima</span>
          </h1>

          <h2 className="text-xl md:text-2xl mt-4 text-secondary font-medium">
            Building modern, scalable & secure web applications
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-dark">
            I am a passionate MERN Stack Developer focused on creating
            responsive user interfaces and robust backend systems.
            I enjoy turning complex requirements into clean, efficient,
            and user-friendly web applications using modern technologies.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-dark">
            My work emphasizes performance, security, and maintainable
            code that delivers real-world business value.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border-2 border-secondary px-6 py-3 rounded-lg text-dark font-medium hover-bg-secondary hover:text-light transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* ===== RIGHT IMAGES ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <img
            src="/web.jpg"
            alt="Web development project"
            className="w-full max-w-xs h-56 object-cover rounded-2xl shadow-lg"
          />
          <img
            src="/web2.jpg"
            alt="Frontend development"
            className="w-full max-w-xs h-56 object-cover rounded-2xl shadow-lg"
          />
          <img
            src="/web3.jpg"
            alt="Full stack application"
            className="w-full max-w-xs h-56 object-cover rounded-2xl shadow-lg sm:col-span-2"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
