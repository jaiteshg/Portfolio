"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2 -z-10"></div>
      <div className="relative z-10 flex flex-col items-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Jaitesh Godara</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg md:text-xl text-gray-400"
      >
        Full-Stack Developer | Building AI-powered Web Apps
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-gray-500 max-w-xl"
      >
        I build AI-powered applications, real-time systems, and developer tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex gap-4"
      >
        <a href="#projects">
          <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 transition">
            View Projects
          </button>
        </a>

        <a href="#contact">
          <button className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 hover:scale-105 transition">
            Contact Me
          </button>
        </a>
      </motion.div>
      </div>
    </section>
  );
}