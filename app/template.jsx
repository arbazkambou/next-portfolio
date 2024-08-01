"use client";
import useScrollbar from "@/hooks/useScrollbar";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};
function Template({ children }) {
  const completion = useScrollbar();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
        <span
          style={{ transform: `translateY(${completion - 100}%)` }}
          className="fixed z-50 top-0 right-0 w-1 bottom-0 bg-primary transition-all duration-700"
        ></span>
      </motion.main>
    </>
  );
}

export default Template;
