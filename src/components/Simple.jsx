import React from 'react'
import  { motion }  from 'motion/react';
const Simple = () => {
  return (
    <>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            // here we can also use "x" or "y", which direction you want to slide text.
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5  }}
            className=' h-screen w-screen flex justify-center items-center '
        >
            <h1>Hello, Motion!</h1>
        </motion.div>   

    
    
    </>
  )
}

export default Simple;
