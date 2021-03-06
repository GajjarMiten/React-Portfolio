import { Variants } from "framer-motion";
import React from "react";
import { ButtonStyle } from "./Button.style";

const buttonVariants: Variants = {
    initial: {
        boxShadow: "none",
    },
    hover: {
        // cursor: "pointer",

        boxShadow: "0px 0px 20px 1px #22D1EE",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
    tap: {
        scale: 1.2,
    },
};

const Button: React.FC<{ onClick: VoidFunction }> = ({ children, onClick }) => {
    return (
        <ButtonStyle
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
        >
            {children}
        </ButtonStyle>
    );
};

export default Button;
