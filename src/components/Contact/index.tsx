"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 1000); // Simulated submission
  };

  return (
    <section className=" text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-3 tracking-tight"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-10"
        >
          I&apos;m open to collaboration, freelance opportunities, or just a
          friendly hello.
        </motion.p>

        <AnimatePresence>
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6 text-left"
            >
              {/* Floating Input Fields */}
              {["name", "email", "message"].map((field, i) => (
                <div className="relative" key={i}>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      required
                      className="peer w-full bg-gray-800 text-white placeholder-transparent px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder={`Your ${field}`}
                    />
                  ) : (
                    <textarea
                      name={field}
                      required
                      rows={4}
                      className="peer w-full bg-gray-800 text-white placeholder-transparent px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your message"
                    ></textarea>
                  )}
                  <label
                    htmlFor={field}
                    className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-6xl text-green-500 mb-4"
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-semibold">
                Thanks for reaching out!
              </h3>
              <p className="text-gray-400 mt-2">
                I’ll respond to your message as soon as possible.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
