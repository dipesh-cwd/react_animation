
import { motion } from "motion/react";

const Sample = ({children, stiffness = 300, damping= 15, type= "spring"}) => {
  return (
    <>
      
        <motion.button
          whileHover={{ scale: 1.05, y: -2, backgroundColor: "#000000" }}
          whileTap={{ scale: 0.9, y:1 }}
          transition={{ type: `${type}`, stiffness, damping }}
          className="px-6 py-3 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          {children}
        </motion.button>
      
    </>
  );
};

export default Sample;
