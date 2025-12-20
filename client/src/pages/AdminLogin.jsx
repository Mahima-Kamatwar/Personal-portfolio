import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      // Save token
      localStorage.setItem("adminToken", response.data.token);

      alert(response.data.message); // shows "Login successful"

      navigate("/");

    } catch (error) {
      // ✅ show REAL backend message
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Server not reachable");
      }
    }
  };

  return (
    <section className="min-h-screen bg-accent flex items-center justify-center px-4">
      <div className="relative w-full max-w-md bg-highlight rounded-2xl shadow-xl p-8">

        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-primary text-xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Admin Login
        </h2>

        <p className="text-center text-secondary mb-8">
          Login to access admin dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded border"
          />

          <button className="w-full bg-primary text-white py-3 rounded">
            Login
          </button>

        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
