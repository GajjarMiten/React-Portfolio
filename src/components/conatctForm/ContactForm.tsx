import React from "react";

import {
    FormField,
    FormStyle,
    FieldTitle,
    Input,
    InputArea,
    NameEmailContainer,
} from "./ContactForm.style";

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

const ContactForm: React.FC = () => {
    return (
        <FormStyle
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <NameEmailContainer>
                <FormField>
                    <FieldTitle htmlFor="name">I am</FieldTitle>
                    <Input id="name" name="name" placeholder="NAME" />
                </FormField>
                <FormField>
                    <FieldTitle htmlFor="email">My Email is</FieldTitle>
                    <Input id="name" name="name" placeholder="You@Top.com" />
                </FormField>
            </NameEmailContainer>
            <FormField>
                <FieldTitle htmlFor="email">Let&apos;s Talk on</FieldTitle>
                <InputArea
                    id="name"
                    name="name"
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
