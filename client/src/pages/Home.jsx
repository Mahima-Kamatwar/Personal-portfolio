// import React from "react";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="fixed top-0 w-full bg-primary z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-light text-xl font-bold">MahimaDev</h1>

//           <ul className="flex gap-6 text-light">
//             <li><a href="#home" className="hover-text-secondary">Home</a></li>
//             <li><a href="#projects" className="hover-text-secondary">Projects</a></li>
//             <li><a href="#expertise" className="hover-text-secondary">Expertise</a></li>
//             <li><a href="#skills" className="hover-text-secondary">Skills</a></li>
//             <li><a href="#contact" className="hover-text-secondary">Contact</a></li>
//          {/* Admin Login */}
//           <li>
//             <Link
//               to="/admin/login"
//               className="border border-secondary px-4 py-1 rounded-full text-sm hover:bg-secondary hover:text-primary transition"
//             >
//               Admin
//             </Link>
//           </li>
        
//           </ul>
//         </div>
//       </nav>

//       {/*  HERO  */}
      // <section
      //   id="home"
      //   className="min-h-screen bg-accent flex items-center pt-24"
      // >
      //   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      //     <div className="bg-highlight p-8 md:p-10 rounded-xl shadow-lg">
      //       <h1 className="text-4xl md:text-5xl font-bold text-primary">
      //         Hi, I'm Mahima
      //       </h1>

      //       <h2 className="text-xl md:text-2xl mt-4 text-secondary">
      //         Professional MERN Stack Web Developer
      //       </h2>

      //       <p className="mt-6 text-base md:text-lg leading-relaxed">
      //         I build scalable, secure, and high-performance web applications
      //         with clean UI and strong backend logic using modern technologies.
      //       </p>

      //       <div className="mt-8 flex gap-4">
      //         <a href="#projects" className="btn-primary">View Work</a>
      //         <a
      //           href="#contact"
      //           className="border border-secondary px-6 py-3 rounded-lg hover-bg-secondary hover:text-light transition"
      //         >
      //           Hire Me
      //         </a>
      //       </div>
      //     </div>

      //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
      //       <img src="/web.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
      //       <img src="/web2.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md" />
      //       <img src="/web3.jpg" className="w-full max-w-xs h-56 object-cover rounded-xl shadow-md sm:col-span-2" />
      //     </div>
      //   </div>
      // </section>

//       {/*  PROJECTS */}
//       <section
 
//   id="projects"
//   className="min-h-screen bg-highlight flex items-center py-24"
// >
//   <div className="max-w-7xl mx-auto px-6 w-full">
//     <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
//       Featured Projects
//     </h2>

//     <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"> 

//       {/* ================= CARD 1 ================= */}
//       <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
//         {/* Card Header */}
//         <div className="p-8 border-b border-secondary">
//           <h3 className="text-2xl font-bold text-primary mb-2">
//             Personal Portfolio Platform
//           </h3>
//           <p className="text-sm text-secondary">
//             A full-stack MERN portfolio with secure admin access and dynamic content management.
//           </p>
//         </div>

//         {/* Card Body */}
//         <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
//           <ul className="list-disc list-inside space-y-2">
//             <li>Secure Admin Login using JWT Authentication</li>
//             <li>Dynamic Project & Gallery Management (CRUD)</li>
//             <li>Image & Media Uploads using Multer</li>
//             <li>MongoDB Atlas with RESTful APIs</li>
//             <li>Responsive UI built with React & Tailwind</li>
//           </ul>
//         </div>

//         {/* Card Footer */}
//         <div className="p-8 pt-0 flex gap-4">
//           <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
//             View Details
//           </button>
//           <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
//             GitHub
//           </button>
//         </div>
//       </div>

//       {/* ================= CARD 2 ================= */}
//       <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
//         <div className="p-8 border-b border-secondary">
//           <h3 className="text-2xl font-bold text-primary mb-2">
//             E-Commerce Application
//           </h3>
//           <p className="text-sm text-secondary">
//             A scalable online shopping platform with role-based access and order tracking.
//           </p>
//         </div>

//         <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
//           <ul className="list-disc list-inside space-y-2">
//             <li>User & Admin Role-based Authentication</li>
//             <li>Product Management with Image Uploads</li>
//             <li>Shopping Cart & Order History</li>
//             <li>Secure Payments & Order Tracking Flow</li>
//             <li>Optimized Backend APIs using Node & Express</li>
//           </ul>
//         </div>

//         <div className="p-8 pt-0 flex gap-4">
//           <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
//             View Details
//           </button>
//           <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
//             Live Demo
//           </button>
//         </div>
//       </div>

//       {/* ================= CARD 3 ================= */}
//       <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
//         <div className="p-8 border-b border-secondary">
//           <h3 className="text-2xl font-bold text-primary mb-2">
//             Media Gallery & Blog System
//           </h3>
//           <p className="text-sm text-secondary">
//             A content management system for blogs and media with optimized file handling.
//           </p>
//         </div>

//         <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
//           <ul className="list-disc list-inside space-y-2">
//             <li>Blog & Media CRUD Operations</li>
//             <li>Optimized Image & Video Upload System</li>
//             <li>Structured MongoDB Collections</li>
//             <li>REST APIs for Content Fetching</li>
//             <li>SEO-friendly Content Rendering</li>
//           </ul>
//         </div>

//         <div className="p-8 pt-0 flex gap-4">
//           <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
//             View Details
//           </button>
//           <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
//             GitHub
//           </button>
//         </div>
//       </div>

//     </div>
//   </div>
// </section> 


//       {/*  TECHNICAL EXPERTISE  */}
//    <section
//   id="expertise"
//   className="min-h-screen bg-accent flex items-center py-20"
// >
//   <div className="max-w-7xl mx-auto px-6 w-full">
//     <h2 className="text-4xl font-bold text-center text-primary mb-12">
//       Technical Expertise
//     </h2>

//     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

//       {/* Frontend */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Frontend Development
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Building structured and semantic layouts using HTML5</li>
//           <li>Styling responsive and accessible interfaces with CSS3</li>
//           <li>Developing interactive UIs using JavaScript & React.js</li>
//           <li>Creating mobile-first and responsive designs</li>
//         </ul>
//       </div>

//       {/* Backend */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Backend Development
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Building scalable applications with Node.js</li>
//           <li>Designing RESTful APIs using Express.js</li>
//           <li>Implementing secure JWT authentication</li>
//           <li>Handling server-side business logic</li>
//         </ul>
//       </div>

//       {/* Database */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Database Management
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Designing MongoDB schemas</li>
//           <li>Using Mongoose ODM effectively</li>
//           <li>Optimizing queries & aggregations</li>
//           <li>Ensuring secure data storage</li>
//         </ul>
//       </div>

//       {/* Media */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Media & File Handling
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Uploading files using Multer</li>
//           <li>Managing image & media galleries</li>
//           <li>Structuring upload folders</li>
//           <li>Ensuring secure file access</li>
//         </ul>
//       </div>

//       {/* Tools */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Development Tools
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Version control with Git & GitHub</li>
//           <li>API testing using Postman</li>
//           <li>Efficient coding with VS Code</li>
//           <li>Environment configuration</li>
//         </ul>
//       </div>

//       {/* Deployment */}
//       <div className="bg-highlight p-6 rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//         <h3 className="text-xl font-semibold text-secondary mb-3">
//           Deployment & Hosting
//         </h3>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Frontend deployment on Netlify</li>
//           <li>Backend hosting on Render</li>
//           <li>MongoDB Atlas cloud database</li>
//           <li>Production environment setup</li>
//         </ul>
//       </div>

//     </div>
//   </div>
// </section>


//       {/* ================= SKILLS ================= */}
// <section
//   id="skills"
//   className="min-h-screen bg-highlight flex items-center py-24"
// >
//   <div className="max-w-7xl mx-auto px-6 w-full">

//     <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
//       Technical Skills
//     </h2>

//     <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

//       {/* ===== Skill 1 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-solid fa-code text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           HTML, CSS & JavaScript
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Creating responsive layouts, interactive user interfaces, and
//           modern JavaScript-driven web applications.
//         </p>
//       </div>

//       {/* ===== Skill 2 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-brands fa-react text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           React.js
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Building scalable single-page applications using hooks,
//           reusable components, and clean UI architecture.
//         </p>
//       </div>

//       {/* ===== Skill 3 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-brands fa-node-js text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           Node.js & Express
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Developing REST APIs, middleware logic, and scalable backend
//           systems using Node and Express.
//         </p>
//       </div>

//       {/* ===== Skill 4 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-solid fa-database text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           MongoDB
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Designing schemas, performing CRUD operations, and optimizing
//           database queries using MongoDB.
//         </p>
//       </div>

//       {/* ===== Skill 5 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-solid fa-lock text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           JWT Authentication
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Implementing secure authentication systems using JWT tokens,
//           protected routes, and role-based access.
//         </p>
//       </div>

//       {/* ===== Skill 6 ===== */}
//       <div className="bg-accent border-2 border-secondary rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
//         <div className="w-14 h-14 flex items-center justify-center bg-primary rounded-full mb-5">
//           <i className="fa-solid fa-file-arrow-up text-highlight text-xl"></i>
//         </div>
//         <h3 className="text-xl font-bold text-primary mb-3">
//           Multer & File Uploads
//         </h3>
//         <p className="text-dark text-sm leading-relaxed">
//           Handling image and media uploads efficiently with validation
//           and structured storage management.
//         </p>
//       </div>

//     </div>
//   </div>
// </section>




//       {/* CONTACT  */}
//      <section
//   id="contact"
//   className="min-h-screen bg-accent flex items-center py-24"
// >
//   <div className="max-w-3xl mx-auto px-6 w-full">

//     {/* Heading */}
//     <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
//       Get In Touch
//     </h2>
//     <p className="text-center text-dark mb-12 max-w-xl mx-auto">
//       Have a project idea, collaboration opportunity, or just want to say hello?
//       Feel free to reach out — I’m always open to discussing new ideas and opportunities.
//     </p>

//     {/* Contact Card */}
//     <div className="bg-highlight border-2 border-secondary rounded-3xl shadow-xl p-10">
//       <form className="space-y-6">

//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium text-primary mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-primary mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block text-sm font-medium text-primary mb-2">
//             Message
//           </label>
//           <textarea
//             rows="5"
//             placeholder="Write your message here..."
//             className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
//           ></textarea>
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="btn-primary w-full text-lg"
//         >
//           Send Message
//         </button>

//       </form>
//     </div>

//   </div>
// </section>

//   {/* footer */}
// <footer className="bg-primary py-10">
//   <div className="max-w-7xl mx-auto px-6 text-center">

//     <h3 className="text-light text-xl font-semibold mb-2">
//       Mahima Kamatwar
//     </h3>

//     <p className="text-highlight text-sm mb-4">
//       MERN Stack Developer | Building modern, scalable web applications
//     </p>

//     <p className="text-light text-sm opacity-80">
//       © 2025 Mahima Kamatwar. All rights reserved.
//     </p>

//   </div>
// </footer>
// </>
//   )}

// export default Home

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Expertise />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
