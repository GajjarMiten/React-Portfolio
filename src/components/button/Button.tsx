import React from "react";
import { ButtonStyle } from "./Button.style";

const buttonVariants = {
    initial: {
        boxShadow: "none",
    },
    hover: {
        boxShadow: "0px 0px 20px 1px #a770ef",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
    tap: {
        scale: 1.2,
    },
};

const Button: React.FC = (props: any) => {
    return (
        <ButtonStyle
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
        >
            {props.children}
        </ButtonStyle>
    );
};

export default Button;
