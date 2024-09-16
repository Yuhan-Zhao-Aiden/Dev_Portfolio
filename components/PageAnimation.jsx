"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageAnimation = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-500"
        />
        <motion.div
          key={`${pathname}-content`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageAnimation;
