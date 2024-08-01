import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.toLowerCase() === "tester" && password.toLowerCase() === "tester") {
      navigate("/user");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 h-full bg-blue-200/20">
        <img
          src="https://moneycircle.ca/wp-content/uploads/2022/09/sb-banner.svg"
          alt="Decorative Banner"
          className="w-full h-full object-cover pt-20"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to ChitFund
          </h1>
          <p className="text-md text-gray-600 mb-6">Your Admin Dashboard</p>
          <p className="text-4xl sm:hidden md:bg-transparent sm:w-full text-gray-600 absolute top-4 left-4 font-bold">
            <span className="text-red-500">💰</span> Chit Fund
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <button className="flex items-center justify-center py-2 px-4 mb-2 md:mb-0 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <FaGoogle className="mr-2 text-red-500" />
              Sign in with Google
            </button>
            <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <FaFacebook className="mr-2 text-blue-600" />
              Sign in with FB
            </button>
          </div>

          <p className="text-center text-md text-gray-600 mb-6">
            or sign in with
          </p>

          {error && <p className="text-center text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-bold text-md text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-md font-bold text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            New to ChitFund?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
