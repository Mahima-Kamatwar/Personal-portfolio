import React from "react";

const Expertise = () => {
  return (
    <section id="expertise" className="min-h-screen bg-accent py-20">
      <div className="max-w-7xl mx-auto px-6">

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
  );
};

export default Expertise;
