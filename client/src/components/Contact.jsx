import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-accent py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-primary mb-4">
          Get In Touch
        </h2>

 <p className="text-center text-dark mb-12 max-w-xl mx-auto">
      Have a project idea, collaboration opportunity, or just want to say hello?
      Feel free to reach out — I'm always open to discussing new ideas and opportunities.
    </p>

    {/* Contact Card */}
    <div className="bg-highlight border-2 border-secondary rounded-3xl shadow-xl p-10">
      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="btn-primary w-full text-lg"
        >
          Send Message
        </button>

      </form>
    </div>

      </div>
    </section>
  )
}

export default Contact
