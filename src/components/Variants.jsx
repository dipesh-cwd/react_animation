import React from "react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.2 },
  }),
};

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
// };


// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

const Variants = () => {
  const data = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
  ];
  return (
    <>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="  flex flex-col justify-center items-center space-y-4 "
      >
        {data.map((item, index) => (
          <motion.li variants={itemVariants} custom={index} key={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Variants;
