"use client";
import React from "react";

import { TracingBeam } from "@/components/UI/Tracing-beam";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-3xl mx-auto pt-10">
        <AnimatePresence>
          {projectsData.map((item, index) => (
            <motion.div
              key={item.title}
              className="mb-24 p-6 rounded-2xl bg-[#5d5c890b] shadow-xl group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15,
              }}
            >
              {/* Badge */}
              <motion.div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-xs px-4 py-1 mb-4 font-medium w-fit tracking-wide shadow-sm"
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: index * 0.15 + 0.1,
                  type: "spring",
                  stiffness: 160,
                }}
              >
                {item.badge}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-semibold mb-4 text-white relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white group-hover:after:w-full after:transition-all after:duration-500"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  duration: 0.5,
                }}
              >
                {item.title}
              </motion.h3>

              {/* Image */}
              {item.image && (
                <motion.div
                  className="overflow-hidden rounded-xl mb-5 border border-neutral-800"
                  initial={{ scale: 0.96, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              )}

              {/* Description */}
              <motion.p
                className="text-sm text-neutral-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15 + 0.4,
                  duration: 0.5,
                }}
              >
                {item.description}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: index * 0.15 + 0.5,
                  duration: 0.4,
                }}
              >
                {item.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-[#2a2a2a] text-white/80 text-xs px-3 py-1 rounded-full hover:bg-[#3a3a3a] transition duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Links */}
              <motion.div
                className="flex gap-6 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15 + 0.6,
                  duration: 0.4,
                }}
              >
                {item.live && (
                  <motion.a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline hover:text-sky-300 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    🌐 Live Site
                  </motion.a>
                )}
                {item.github && (
                  <motion.a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:underline hover:text-white transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    💻 GitHub
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </TracingBeam>
  );
}

const projectsData = [
  {
    title: "SonicFlow – Music Streaming App",
    description: (
      <>
        A full-stack music streaming platform built with Next.js and Django.
        Features include user authentication, playlists, favorites, recent
        plays, and a responsive audio player.
      </>
    ),
    badge: "Full Stack",
    techStack: ["Next.js", "Django", "Tailwind", "MongoDB", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Local or optimized hosted image
    github: "https://github.com/yourusername/sonicflow",
    live: "https://sonicflow.app", // If deployed
  },
  {
    title: "Tender Finder – Keyword Based Tender Search",
    description: (
      <>
        A web-based SaaS platform that helps users find relevant tenders using
        advanced keyword matching, filters, and alerting mechanisms.
      </>
    ),
    badge: "B2B SaaS",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "",
    live: "https://tenderfinder.io",
  },
  {
    title: "PlanHub – Affordable Subscription Sharing",
    description: (
      <>
        A simple platform that allows users to buy and manage group
        subscriptions for platforms like Netflix, YouTube Premium, and Hotstar
        at discounted rates.
      </>
    ),
    badge: "Startup MVP",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/yourusername/planhub",
    live: "",
  },
];
