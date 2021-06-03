import React from "react";
import { motion, Variants } from "framer-motion";
import useInViewAnimate from "../hooks/useInViewAnimate";

const slideInVariants: Variants = {
    hidden: {
        opacity: 0,
        y: "50%",
    },
    visible: {
        opacity: 1,
        y: "0",
        transition: {
            type: "spring",
            duration: 0.8,
            delay: 1,
            stiffness: 90,
            staggerChildren: 0.1,
        },
    },
};

const SlideInWhenIn: React.FC = ({ children }) => {
    const { ref, controls } = useInViewAnimate("hidden", "visible");
    return (
        <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={controls}
            className="slide-in-box"
            ref={ref}
        >
            {children}
        </motion.div>
    );
};

export default SlideInWhenIn;
