

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function Login() {

  // Navigation after successful login
  const navigate = useNavigate();

  // Loading state
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await login(formData);

      console.log(response.data);

      // Store Access Token
      localStorage.setItem("accessToken", response.data.data.temp_key);

      // Store Refresh Token
      localStorage.setItem("refreshToken", response.data.data.main_key);

      // Store User Object
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.data.id,
          name: response.data.data.name,
          email: response.data.data.email,
          role: response.data.data.role,
        })
      );

      // Navigate Home
      navigate("/");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your SmartBuy account
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <button
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            {loading ? "Logging..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-5">
          Don't have an account?

          <Link
            to="/register"
            className="text-green-600 ml-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;

