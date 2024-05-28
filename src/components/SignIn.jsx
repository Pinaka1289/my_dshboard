import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import apiConfig from "../config/apiConfig"; // Import the configuration

const SignIn = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username,
        password,
      };

      axios
        .post(apiConfig.LOGIN, data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          transformRequest: [
            (data) => {
              let formData = new FormData();
              for (let key in data) {
                formData.append(key, data[key]);
              }
              return formData;
            },
          ],
        })
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          navigate("/dashboard");
        });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="md:w-1/2 p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <div className="flex space-x-4 mb-4 justify-center">
        <a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center "
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
        or use your email password
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex  items-center mb-4 justify-center">
          <a href="#" className="text-sm text-blue-500 ">
            Forget Your Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          SIGN IN
        </button>
      </form>
      <button
        onClick={onToggle}
        className="mt-4 w-full py-2 border border-gray-300 rounded"
      >
        Don't have an account? Sign Up
      </button>
    </div>
  );
};

export default SignIn;
