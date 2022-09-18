import React, { Children, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function RX({children,initial,final,delay,duration}) {

  const squareVariants = {
  visible: { 
    rotateX: final,
    transition: { duration: duration,delay:delay } 
  },
  hidden: {  
    rotateX: initial,
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