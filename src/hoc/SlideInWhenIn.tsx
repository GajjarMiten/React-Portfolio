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
            stiffness: 90,
        },
    },
};

const SlideInWhenIn = (props: any) => {
    const { ref, controls } = useInViewAnimate("hidden", "visible");
    return (
        <motion.div
            variants={slideInVariants}
            initial="hidden"
            animate={controls}
            className="slide-in-box"
            ref={ref}
        >
            {props.children}
        </motion.div>
    );
};

export default SlideInWhenIn;
