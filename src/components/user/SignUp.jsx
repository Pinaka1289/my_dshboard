import React, { useState } from "react";
import axios from "axios";
import apiConfig from "../../config/apiConfig"; // Import the configuration
const SignUp = ({ onToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: name,
      email: email,
      password: password,
    };

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        apiConfig.SIGN_UP,
        data,
        requestOptions
      );
      if (response.status === 200) {
        console.log(response.data);
        alert("Registered successfully. Please sign in.");
        onToggle();
      } else {
        throw new Error(response.data.detail);
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="md:w-1/2 p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <div className="flex space-x-4 mb-4 justify-center">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p className="text-gray-600 mb-4 text-center">
        or use your email for registration
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          SIGN UP
        </button>
      </form>
      <button
        onClick={onToggle}
        className="mt-4 w-full py-2 border border-gray-300 rounded"
      >
        Already have an account? Sign In
      </button>
    </div>
  );
};

export default SignUp;
