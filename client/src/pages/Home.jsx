import React from "react";

const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-primary z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-light text-xl font-bold">MahimaDev</h1>

          <ul className="flex gap-6 text-light">
            <li><a href="#home" className="hover-text-secondary">Home</a></li>
            <li><a href="#projects" className="hover-text-secondary">Projects</a></li>
            <li><a href="#expertise" className="hover-text-secondary">Expertise</a></li>
            <li><a href="#skills" className="hover-text-secondary">Skills</a></li>
            <li><a href="#contact" className="hover-text-secondary">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/*  HERO  */}
      <section
        id="home"
        className="min-h-screen bg-accent flex items-center pt-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-highlight p-8 md:p-10 rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Hi, I'm Mahima
            </h1>

            <h2 className="text-xl md:text-2xl mt-4 text-secondary">
              Professional MERN Stack Web Developer
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed">
              I build scalable, secure, and high-performance web applications
              with clean UI and strong backend logic using modern technologies.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="btn-primary">View Work</a>
              <a
                href="#contact"
                className="border border-secondary px-6 py-3 rounded-lg hover-bg-secondary hover:text-light transition"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            <img src="/web.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
            <img src="/web2.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
            <img src="/web3.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md sm:col-span-2" />
          </div>
        </div>
      </section>

      {/*  PROJECTS */}
     <section
  id="projects"
  className="min-h-screen bg-highlight flex items-center py-20"
>
  <div className="max-w-7xl mx-auto px-6 w-full">
    <h2 className="text-4xl font-bold text-center text-primary mb-12">
      Featured Projects
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="bg-light border border-secondary p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Personal Portfolio Platform
        </h3>
        <ul className="list-disc list-inside text-sm text-secondary space-y-1">
          <li>Admin login with JWT</li>
          <li>Dynamic project & gallery</li>
          <li>Multer media uploads</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="bg-light border border-secondary p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold text-primary mb-4">
          E-Commerce Application
        </h3>
        <ul className="list-disc list-inside text-sm text-secondary space-y-1">
          <li>Role-based authentication</li>
          <li>Product CRUD & images</li>
          <li>Cart & order tracking</li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="bg-light border border-secondary p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Media Gallery & Blog System
        </h3>
        <ul className="list-disc list-inside text-sm text-secondary space-y-1">
          <li>Blog & media CRUD</li>
          <li>Optimized uploads</li>
          <li>MongoDB REST APIs</li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/*  TECHNICAL EXPERTISE  */}
   <section
  id="expertise"
  className="min-h-screen bg-accent flex items-center py-20"
>
  <div className="max-w-7xl mx-auto px-6 w-full">
    <h2 className="text-4xl font-bold text-center text-primary mb-12">
      Technical Expertise
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      {/* Frontend */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Frontend Development
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Building structured and semantic layouts using HTML5</li>
          <li>Styling responsive and accessible interfaces with CSS3</li>
          <li>Developing interactive UIs using JavaScript & React.js</li>
          <li>Creating mobile-first and responsive designs</li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Backend Development
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Building scalable applications with Node.js</li>
          <li>Designing RESTful APIs using Express.js</li>
          <li>Implementing secure JWT authentication</li>
          <li>Handling server-side business logic</li>
        </ul>
      </div>

      {/* Database */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Database Management
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Designing MongoDB schemas</li>
          <li>Using Mongoose ODM effectively</li>
          <li>Optimizing queries & aggregations</li>
          <li>Ensuring secure data storage</li>
        </ul>
      </div>

      {/* Media */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Media & File Handling
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Uploading files using Multer</li>
          <li>Managing image & media galleries</li>
          <li>Structuring upload folders</li>
          <li>Ensuring secure file access</li>
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Development Tools
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Version control with Git & GitHub</li>
          <li>API testing using Postman</li>
          <li>Efficient coding with VS Code</li>
          <li>Environment configuration</li>
        </ul>
      </div>

      {/* Deployment */}
      <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-secondary mb-3">
          Deployment & Hosting
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend deployment on Netlify</li>
          <li>Backend hosting on Render</li>
          <li>MongoDB Atlas cloud database</li>
          <li>Production environment setup</li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/* ================= SKILLS ================= */}
 
<section
  id="skills"
  className="min-h-screen bg-highlight flex items-center py-20"
>
  <div className="max-w-7xl mx-auto px-6 w-full">
    <h2 className="text-4xl font-bold text-center text-primary mb-12">
      Skills
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        HTML, CSS & JavaScript
      </div>

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        React.js
      </div>

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        Node.js & Express
      </div>

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        MongoDB
      </div>

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        JWT Authentication
      </div>

      <div className="bg-accent p-6 rounded-xl text-center shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        Multer Uploads
      </div>

    </div>
  </div>
</section>

      {/* CONTACT  */}
      <section
        id="contact"
        className="min-h-screen bg-accent flex items-center py-20"
      >
        <div className="max-w-md mx-auto px-6 w-full text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Contact Me
          </h2>

          <form className="space-y-4">
            <input className="w-full p-3 rounded border" placeholder="Name" />
            <input className="w-full p-3 rounded border" placeholder="Email" />
            <textarea className="w-full p-3 rounded border" rows="4" placeholder="Message"></textarea>
            <button className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>

      {/*  FOOTER */}
      <footer className="bg-primary py-6 text-center">
        <p className="text-light">
          © 2025 Mahima Kamatwar | MERN Stack Developer
        </p>
      </footer>
    </>
  )
}

export default Home
