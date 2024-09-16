import { animate, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// const stairAnimation = {
//   initial: {
//     top: "0%"
//   },
//   animate: {
//     top: "100%"
//   },
//   exit: {
//     top: "0%"
//   }
// };

const colors = {
  "/": "bg-accent",
  "/services": "bg-[#BFD7EA]",
  "/resume": "bg-[#FF6663]",
  "/work": "bg-[#8B5FBF]",
  "/contact": "bg-[#03F7EB]"
}


const ColorMask = () => {

  const pathname = usePathname();
  return <>
    <motion.div
      initial={{
        scale: 0
      }}
      animate={{
        scale: [0, 1, 0],
        borderRadius: ["50%", "0%", "50%"]
      }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
      className={`h-full w-full ${colors[pathname]} relative`}
    >
    </motion.div>
  </>
}

export default ColorMask;