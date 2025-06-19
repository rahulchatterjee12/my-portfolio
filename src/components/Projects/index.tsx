"use client";
import React from "react";

import { TracingBeam } from "@/components/Projects/Tracing-beam";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../common/SectionHeader";
import Image from "next/image";

export function Projects() {
  return (
    <>
      <SectionHeader>
        My Projects <br /> and Contributions
      </SectionHeader>
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
                    <Image
                      src={item.image}
                      alt={`${item.title}`}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
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
    </>
  );
}

const projectsData = [
  {
    title: "Runway",
    description: (
      <>
        I built the frontend from the ground up using Next.js, incorporating
        efficient state management with Redux. The user interface was designed
        to be fully responsive, utilizing both Tailwind CSS and Material UI to
        ensure a seamless experience across all devices.
      </>
    ),
    badge: "Full Stack",
    techStack: [
      "Next.js",
      "Django-Rest-Framework",
      "Tailwind",
      "MongoDB",
      "Redux",
      "Material UI",
    ],
    image: "/assets/projects/1.png",
    github: "",
    live: "https://runway.org.in",
  },
  {
    title: "File My Return",
    description: (
      <>
        I developed the frontend from scratch using Next.js, implemented robust
        state management with Redux, and designed a fully responsive user
        interface by leveraging Tailwind CSS alongside Material UI for a modern
        and consistent design.
      </>
    ),
    badge: "Frontend",
    techStack: [
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "TypeScript",
    ],
    image: "/assets/projects/2.png",
    github: "",
    live: "https://filemyreturn.co.in/",
  },
  {
    title: "Runway Supplier",
    description: (
      <>
        I developed the frontend from scratch using Next.js, leveraging Redux
        for efficient state management. The interface was designed to be fully
        responsive, using Tailwind CSS to ensure a seamless user experience
        across all devices.
      </>
    ),
    badge: "Full Stack",
    techStack: [
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Django-Rest-Framework",
    ],
    image: "/assets/projects/3.png",
    github: "",
    live: "https://supplier.runway.org.in/",
  },
  {
    title: "Lalithya",
    description: (
      <>
        Developed a fully functional e-commerce website for Lalitay, a women’s
        traditional clothing brand, using Wix Studio with responsive design,
        product catalogs, category filters, and a secure checkout for an
        enhanced user experience.
      </>
    ),
    badge: "Wix e-commerce",
    techStack: ["Wix", "Velo"],
    image: "/assets/projects/4.png",
    github: "",
    live: "https://lalithya.com",
  },
  {
    title: "Aecus Legal",
    description: (
      <>
        Designed and developed a professional, responsive website for Aecus
        Legal, a legal consultancy firm, using the Wix platform. The site
        features interactive contact forms, client testimonials, detailed
        service descriptions, and pricing plans to build trust and drive client
        inquiries. SEO optimization and streamlined navigation were implemented
        to enhance discoverability and user engagement.
      </>
    ),
    badge: "Wix Portfolio",
    techStack: ["Wix", "Velo"],
    image: "/assets/projects/5.png",
    github: "",
    live: "https://www.aecuslegal.com/",
  },
  {
    title: "Eye Pune",
    description: (
      <>
        Designed and developed a professional, responsive business platform
        website offering digital marketing and web development services using
        Wix, featuring interactive contact forms, client testimonials, pricing
        plans, and SEO-optimized navigation to boost lead generation and user
        engagement.
      </>
    ),
    badge: "Wix Portfolio",
    techStack: ["Wix", "Velo"],
    image: "/assets/projects/6.png",
    github: "",
    live: "https://www.eyepune.com/",
  },
];
