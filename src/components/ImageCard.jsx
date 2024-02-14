import { motion } from "framer-motion";
import React from "react";

function ImageCard({ imageURL }) {
  return (
    <motion.div
      className="w-72 h-72 relative overflow-hidden bg-neutral-900 rounded-md"
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
        duration: 0.2,
      }}
      style={{ originX: 0.5, originY: 0.5 }}
      animate={{ rotate: [0, -3, 3, 0] }}
    >
      <motion.img
        src={imageURL}
        alt="Dynamic content"
        className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}

export default ImageCard;
