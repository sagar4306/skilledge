"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-sky-50 to-indigo-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-sm bg-white/80 backdrop-blur-md">
        <h1 className="text-2xl font-extrabold text-indigo-700">SkillEdge</h1>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="/signin" className="px-5 py-2 text-indigo-600 font-medium hover:underline">
            Sign In
          </a>
          <a
            href="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto w-full flex-grow">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Ace Your Interviews <br /> with{" "}
            <span className="text-indigo-600">AI-Powered Practice</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            SkillEdge helps you practice mock interviews, analyze your resume, and
            get real-time feedback on your confidence, communication, and technical skills.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-medium shadow-lg hover:bg-indigo-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-indigo-600 text-indigo-700 rounded-xl text-lg font-medium hover:bg-indigo-50"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0"
        >
          <img
            src="/ai-illustration.png"
            alt="AI Interview"
            className="w-[400px] md:w-[500px] drop-shadow-xl rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose SkillEdge?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md text-center"
          >
            <CheckCircle className="text-indigo-600 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Interviews</h3>
            <p className="text-gray-600">
              Get real-time technical & HR practice with instant evaluation.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md text-center"
          >
            <CheckCircle className="text-indigo-600 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Resume Analysis</h3>
            <p className="text-gray-600">
              Upload your resume to get role-specific interview preparation.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md text-center"
          >
            <CheckCircle className="text-indigo-600 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Instant Feedback</h3>
            <p className="text-gray-600">
              Identify strengths & weaknesses with actionable improvement tips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-white shadow-inner">
        © {new Date().getFullYear()} SkillEdge — All Rights Reserved
      </footer>
    </main>
  );
}
