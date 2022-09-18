import React, { Children, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function SKX({children,initial,final,duration,delay}) {

  const squareVariants = {
  visible: { 
    skewX: final,
    transition: { duration: duration, delay: delay } 
  },
  hidden: {  
    skewX: initial,
  }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {children}
    </motion.div>
  );
}