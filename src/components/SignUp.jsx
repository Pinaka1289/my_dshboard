import React from "react";

const SignUp = ({ onToggle }) => {
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
      <form>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
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
