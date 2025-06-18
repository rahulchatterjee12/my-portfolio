"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaJs, FaDownload } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Hero() {
  return (
    <section className="w-full  text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* LEFT: Intro */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-500">Rahul Chatterjee</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            A Professional Software Developer with 2+ Years of Experience
          </h2>
          <p className="text-gray-300 mb-8">
            Specialized in building modern web applications using React,
            Next.js, Tailwind CSS, and TypeScript. Passionate about crafting
            responsive UIs and seamless user experiences.
          </p>

          <div className="relative z-10">
            <motion.a
              href="/Rahul_Chatterjee_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: Skills */}
        <motion.div
          className="grid grid-cols-3 gap-x-1 gap-y-4 md:w-1/2 justify-items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Skill icon={<FaReact size={28} />} name="React" delay={0} />
          <Skill icon={<SiNextdotjs size={28} />} name="Next.js" delay={0.2} />
          <Skill
            icon={<SiTailwindcss size={28} />}
            name="Tailwind CSS"
            delay={0.4}
          />
          <Skill icon={<FaJs size={28} />} name="JavaScript" delay={0.6} />
          <Skill
            icon={<SiTypescript size={28} />}
            name="TypeScript"
            delay={0.8}
          />
          <Skill icon={<FaFigma size={28} />} name="Figma" delay={1.0} />
        </motion.div>
      </div>
    </section>
  );
}

function Skill({
  icon,
  name,
  delay = 0,
}: {
  icon: React.ReactNode;
  name: string;
  delay?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-inner"
        animate={{ y: [0, -6, 0, 6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        {/* Soft glowing effect */}
        <div className="absolute inset-0 rounded-full bg-black opacity-20 blur-xl"></div>

        {/* Icon in center */}
        <div className="z-10 text-white">{icon}</div>
      </motion.div>

      {/* Name below the bubble */}
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
}
