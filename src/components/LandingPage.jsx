import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl ">
        {isSignUp ? (
          <SignUp onToggle={toggleSignUp} />
        ) : (
          <SignIn onToggle={toggleSignUp} />
        )}
        <div
          className={`md:w-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 flex flex-col justify-center ${
            isSignUp ? "order-first md:order-last" : ""
          }`}
        >
          {isSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Welcome Back!
              </h2>
              <p className="mb-4 text-center">
                To keep connected with us, please login with your personal info
              </p>
              <button
                onClick={toggleSignUp}
                className="w-full py-2 border border-white rounded hover:bg-white hover:text-purple-700"
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Hello, Friend!
              </h2>
              <p className="mb-4 text-center">
                Register with your personal details to use all of site features
              </p>
              <button
                onClick={toggleSignUp}
                className="w-full py-2 border border-white rounded hover:bg-white hover:text-purple-700"
              >
                SIGN UP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
