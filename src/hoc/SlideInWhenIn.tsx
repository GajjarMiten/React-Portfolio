import React from "react";
import { motion } from "framer-motion";
import useInViewAnimate from "../hooks/useInViewAnimate";

const slideInVariants = {
    hidden: {
        opacity: 0,
        y: "100%",
    },
    visible: {
        opacity: 1,
        y: "0",
        transition: {
            type: "spring",
            duration: 0.8,
            delay: 0.6,
            stiffness: 90,
        },
    },
};

const SlideInWhenIn: React.FC<{ delay: number }> = ({ children, delay }) => {
    const { ref, controls } = useInViewAnimate("hidden", "visible");
    return (
        <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={controls}
            className="slide-in-box"
            ref={ref}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
};

export default SlideInWhenIn;
