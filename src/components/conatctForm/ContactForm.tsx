import { Variants } from "framer-motion/types/types";
import React from "react";
import useInViewAnimate from "../../hooks/useInViewAnimate";

import {
    FormField,
    FormStyle,
    FieldTitle,
    Input,
    InputArea,
    NameEmailContainer,
} from "./ContactForm.style";

const buttonVariants: Variants = {
    initial: {
        boxShadow: "none",
    },
    hover: {
        boxShadow: "0px 0px 20px 1px #22D1EE",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
    tap: {
        scale: 1.2,
    },
};

const fomrVariants: Variants = {
    initial: {
        opacity: 0,
        y: "40%",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.8,
            stiffness: 90,
        },
    },
};

const ContactForm: React.FC = () => {
    const { ref, controls } = useInViewAnimate("initial", "animate");

    return (
        <FormStyle
            ref={ref}
            variants={fomrVariants}
            initial="inital"
            animate={controls}
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <NameEmailContainer>
                <FormField>
                    <FieldTitle htmlFor="name">I am</FieldTitle>
                    <Input id="name" name="name" placeholder="Awesome" />
                </FormField>
                <FormField>
                    <FieldTitle htmlFor="email">My Email is</FieldTitle>
                    <Input id="email" name="email" placeholder="You@Top.com" />
                </FormField>
            </NameEmailContainer>
            <FormField>
                <FieldTitle htmlFor="message">Let&apos;s Talk on</FieldTitle>
                <InputArea
                    id="message"
                    name="message"
                    placeholder="Something Creative..."
                />
            </FormField>
            <FormField>
                <Input
                    type="submit"
                    value="Send 🏹"
                    className="focusable"
                    variants={buttonVariants}
                    whileFocus="hover"
                    whileHover="hover"
                    whileTap="tap"
                />
            </FormField>
        </FormStyle>
    );
};

export default ContactForm;
