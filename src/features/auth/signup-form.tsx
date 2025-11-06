import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // ✅ Added error state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error on typing
  };

  const navigate = useNavigate(); // ✅ rename
const handleNavigate = () => {
  navigate("/login"); // ✅ call the navigate function
};


  const isFormComplete =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
  const response = await fetch(
  "https://technacallcanadabackend-production.up.railway.app/api/auth/register",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    }),
  }
);


    const data = await response.json();

    if (!data.success) {
      setError(data.message || "Something went wrong");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.data.user));
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("refreshToken", data.data.refreshToken);
    handleNavigate();
  } catch (err) {
    console.error(err);
    setError("Network error, please try again later.");
  }
};



  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Image Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-600 flex items-center justify-center p-6 sm:p-8 relative overflow-hidden text-white">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 sm:w-40 sm:h-40 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative z-10 text-center text-white max-w-md">
          <div className="mb-6 flex justify-center">
            <svg
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="70" cy="50" r="12" fill="white" opacity="0.9" />
              <path d="M 70 62 L 70 85" stroke="white" strokeWidth="2" opacity="0.9" />
              <path d="M 70 70 L 55 80" stroke="white" strokeWidth="2" opacity="0.9" />
              <path d="M 70 70 L 85 80" stroke="white" strokeWidth="2" opacity="0.9" />
              <path d="M 70 85 L 55 105" stroke="white" strokeWidth="2" opacity="0.9" />
              <path d="M 70 85 L 85 105" stroke="white" strokeWidth="2" opacity="0.9" />
              <circle cx="130" cy="60" r="12" fill="white" opacity="0.8" />
              <path d="M 130 72 L 130 95" stroke="white" strokeWidth="2" opacity="0.8" />
              <path d="M 130 80 L 115 90" stroke="white" strokeWidth="2" opacity="0.8" />
              <path d="M 130 80 L 145 90" stroke="white" strokeWidth="2" opacity="0.8" />
              <path d="M 130 95 L 115 115" stroke="white" strokeWidth="2" opacity="0.8" />
              <path d="M 130 95 L 145 115" stroke="white" strokeWidth="2" opacity="0.8" />
              <rect x="50" y="130" width="50" height="30" rx="4" fill="white" opacity="0.7" />
              <path d="M 55 160 L 50 170 L 60 160" fill="white" opacity="0.7" />
              <rect x="110" y="140" width="50" height="25" rx="4" fill="white" opacity="0.6" />
              <path d="M 160 165 L 165 175 L 155 165" fill="white" opacity="0.6" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Join Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 px-2 sm:px-4">
            Create your account and start collaborating with your team. Manage
            calls, track performance, and grow together.
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="text-lg sm:text-xl font-semibold text-[#7c3aed] mb-2">
              GET STARTED
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Join thousands of teams managing customer interactions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* ✅ Error Message */}
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}

            {/* Terms Checkbox */}
            <label className="flex items-start gap-2 cursor-pointer mt-4">
              <input type="checkbox" className="w-4 h-4 mt-1 accent-[#7c3aed]" required />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-[#7c3aed] font-medium">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#7c3aed] font-medium">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full font-semibold cursor-pointer py-3 rounded-lg mt-6 transition duration-200 ${
                isFormComplete
                  ? "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#7c3aed] hover:text-[#6d28d9]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
