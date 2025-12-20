import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-highlight py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-primary mb-16">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"> 

      {/* ================= CARD 1 ================= */}
      <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
        {/* Card Header */}
        <div className="p-8 border-b border-secondary">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Personal Portfolio Platform
          </h3>
          <p className="text-sm text-secondary">
            A full-stack MERN portfolio with secure admin access and dynamic content management.
          </p>
        </div>

        {/* Card Body */}
        <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>Secure Admin Login using JWT Authentication</li>
            <li>Dynamic Project & Gallery Management (CRUD)</li>
            <li>Image & Media Uploads using Multer</li>
            <li>MongoDB Atlas with RESTful APIs</li>
            <li>Responsive UI built with React & Tailwind</li>
          </ul>
        </div>

        {/* Card Footer */}
        <div className="p-8 pt-0 flex gap-4">
          <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            View Details
          </button>
          <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
            GitHub
          </button>
        </div>
      </div>

      {/* ================= CARD 2 ================= */}
      <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
        <div className="p-8 border-b border-secondary">
          <h3 className="text-2xl font-bold text-primary mb-2">
            E-Commerce Application
          </h3>
          <p className="text-sm text-secondary">
            A scalable online shopping platform with role-based access and order tracking.
          </p>
        </div>

        <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>User & Admin Role-based Authentication</li>
            <li>Product Management with Image Uploads</li>
            <li>Shopping Cart & Order History</li>
            <li>Secure Payments & Order Tracking Flow</li>
            <li>Optimized Backend APIs using Node & Express</li>
          </ul>
        </div>

        <div className="p-8 pt-0 flex gap-4">
          <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            View Details
          </button>
          <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
            Live Demo
          </button>
        </div>
      </div>

      {/* ================= CARD 3 ================= */}
      <div className="bg-light border border-secondary rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col">
        
        <div className="p-8 border-b border-secondary">
          <h3 className="text-2xl font-bold text-primary mb-2">
            Media Gallery & Blog System
          </h3>
          <p className="text-sm text-secondary">
            A content management system for blogs and media with optimized file handling.
          </p>
        </div>

        <div className="p-8 flex-1 space-y-4 text-secondary text-sm leading-relaxed">
          <ul className="list-disc list-inside space-y-2">
            <li>Blog & Media CRUD Operations</li>
            <li>Optimized Image & Video Upload System</li>
            <li>Structured MongoDB Collections</li>
            <li>REST APIs for Content Fetching</li>
            <li>SEO-friendly Content Rendering</li>
          </ul>
        </div>

        <div className="p-8 pt-0 flex gap-4">
          <button className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
            View Details
          </button>
          <button className="flex-1 border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition">
            GitHub
          </button>
        </div>
      </div>

    </div>

      </div>
    </section>
  )
}

export default Projects;
