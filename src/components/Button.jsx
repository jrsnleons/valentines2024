import { color, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  
};

function Button({ className, callback, children }) {
  return (
    <motion.button
      variants={variants}
      whileTap="tap"
      whileHover="hover"
      className={twMerge(
        "py-2 px-5 rounded text-white font-bold bg-neutral-800",
        className
      )}
      onClick={callback}
    >
      {children}
    </motion.button>
  );
}

export default Button;

//bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
