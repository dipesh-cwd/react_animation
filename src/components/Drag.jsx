import React from "react";
import { motion } from "motion/react";

const Drag = () => {
  return (
    <>
      <motion.button
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileDrag={{ backgroundColor: "#ff0000" }}
        dragElastic={0.5}
        className="px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer"
      >
        Drag Me!
      </motion.button>
    </>
  );
};

export default Drag;
