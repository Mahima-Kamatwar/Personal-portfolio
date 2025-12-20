import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-highlight py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          Technical Skills
        </h2>

 <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

      {/* ===== Skill 1 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-solid fa-code text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          HTML, CSS & JavaScript
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Creating responsive layouts, interactive user interfaces, and
          modern JavaScript-driven web applications.
        </p>
      </div>

      {/* ===== Skill 2 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-brands fa-react text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          React.js
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Building scalable single-page applications using hooks,
          reusable components, and clean UI architecture.
        </p>
      </div>

      {/* ===== Skill 3 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-brands fa-node-js text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          Node.js & Express
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Developing REST APIs, middleware logic, and scalable backend
          systems using Node and Express.
        </p>
      </div>

      {/* ===== Skill 4 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-solid fa-database text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          MongoDB
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Designing schemas, performing CRUD operations, and optimizing
          database queries using MongoDB.
        </p>
      </div>

      {/* ===== Skill 5 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-solid fa-lock text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          JWT Authentication
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Implementing secure authentication systems using JWT tokens,
          protected routes, and role-based access.
        </p>
      </div>

      {/* ===== Skill 6 ===== */}
      <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
          <i className="fa-solid fa-file-arrow-up text-highlight text-xl"></i>
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          Multer & File Uploads
        </h3>
        <p className="text-dark text-sm leading-relaxed">
          Handling image and media uploads efficiently with validation
          and structured storage management.
        </p>
      </div>

    </div>
      </div>
    </section>
  );
};

export default Skills;
