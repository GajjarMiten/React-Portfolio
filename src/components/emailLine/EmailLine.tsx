import { Variants } from "framer-motion";
import React from "react";
import { Email } from "./EmailLine.style";
import { theme } from "../../style/global";

const EmailVariants: Variants = {
    initial: {
        y: "200%",
        rotateZ: 90,
        opacity: 0,
    },
    animate: {
        y: "0",
        opacity: 1,
        borderRadius: "12px",
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 25,
            delay: 0.8,
            duration: 1.3,
        },
    },
    hover: {
        color: theme.textColor,
        border: "solid 2px #fff",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: `0px 0px 10px 1px ${theme.accentColor}`,
        transition: {
            delay: 0.1,
            duration: 0.3,
        },
    },
};

const EmailLine: React.FC = () => {
    return (
        <Email
            variants={EmailVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
        >
            miten3377@gmail.com
        </Email>
    );
};

export default EmailLine;
