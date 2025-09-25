"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Signin() {
  return (
    <main className="flex min-h-screen">
      {/* Left Section */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center items-center justify-center text-white p-10 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-md text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome Back
          </h1>
          <p className="text-xl font-medium drop-shadow-md">
            Practice, prepare and get job-ready with <span className="font-bold">SkillEdge</span>.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex w-full md:w-1/2 items-center justify-center p-10 bg-white"
      >
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-gray-700"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" /> Remember Me
              </label>
              <Link href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Sign In
            </motion.button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            New user?{" "}
            <Link href="/signup" className="text-indigo-600 font-medium hover:underline">
              Create an account
            </Link>
          </p>

          <p className="text-center text-gray-600 mt-2">
            ← <Link href="/" className="text-indigo-600 font-medium hover:underline">Back to Home</Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
