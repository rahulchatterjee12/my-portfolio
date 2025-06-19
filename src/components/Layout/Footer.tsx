"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-white py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center md:text-left space-y-1"
        >
          <h2 className="text-2xl font-bold text-white">Rahul Chatterjee</h2>
          <p className="text-sm text-gray-400">
            Software Developer · Suri, Birbhum, West Bengal, India
          </p>
          <p className="text-sm text-gray-400">
            📧{" "}
            <a
              href="mailto:rc5292684@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              rc5292684@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-6 text-2xl text-gray-400"
        >
          {[
            {
              href: "https://github.com/rahulchatterjee12",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/rahulchatterjee-tech/",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "https://codeforces.com/profile/RaHuL1436",
              icon: <FaCode />,
              label: "Codeforces",
            },
            {
              href: "https://leetcode.com/u/rc5292684/",
              icon: <SiLeetcode />,
              label: "LeetCode",
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              aria-label={link.label}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-white transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider and Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500"
      >
        &copy; {new Date().getFullYear()} Rahul Chatterjee. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
