"use client";
import { motion } from "framer-motion";

export default function AppcardComponent({}) {
  return (
    <>
      <div className="bg-blue-500 w-full pt-16">
        <div className="max-w-6xl mx-auto py-8 px-4 md:px-8 relative overflow-hidden">
          {/* Container for Image and Overlay Text */}
          <motion.div
            className="relative rounded-lg overflow-hidden border-5 border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out px-8 shadow-xl shadow-blue-gray-900/50"
            animate={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.7)",
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {/* Image with Rounded Corners */}
            <img
              src="./Guru.png"
              alt="Cart"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}