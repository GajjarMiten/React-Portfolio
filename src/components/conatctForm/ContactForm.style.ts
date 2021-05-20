import styled from "styled-components";
import { motion } from "framer-motion";
import { column } from "../../style/utils";
import { device } from "../../style/mediaQueries";

const FormStyle = styled(motion.form).attrs({ className: "contact-form" })`
    ${column}
    gap: 4rem;
    @media ${device.laptopL} {
        gap: 1rem;
    }
`;

const NameEmailContainer = styled(motion.div)`
    display: flex;
    gap: 1rem;
`;

const FormField = styled(motion.div)`
    ${column}
`;

const FieldTitle = styled(motion.label)`
    color: white;
    font-family: ${({ theme }) => theme.fontText};
    font-size: ${({ theme }) => theme.headingLG};

    @media ${device.laptopL} {
        font-size: ${({ theme }) => theme.headingSM};
    }
`;

const Input = styled(motion.input)`
    height: 50px;
    font-size: ${({ theme }) => theme.textLG};
    font-family: ${({ theme }) => theme.fontText};
    color: ${({ theme }) => theme.textColor};
    background: none;
    border: none;
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.textColor};
    }

    &:focus {
        border-bottom: solid 2px ${({ theme }) => theme.accentColor};
    }

    &[type="submit"] {
        height: auto;
        border: solid 2px white;
        border-radius: 12px;
        padding: 1.3rem;
        max-width: 250px;
    }

    @media ${device.laptopL} {
        font-size: ${({ theme }) => theme.textMD};
        &[type="submit"] {
            padding: 0.8rem;
            max-width: 150px;
        }
    }
`;

const InputArea = styled(motion.textarea)`
    font-size: ${({ theme }) => theme.textLG};
    font-family: ${({ theme }) => theme.fontText};
    color: ${({ theme }) => theme.textColor};
    background: none;
    border: none;
    outline: none;
    height: 100px;

    resize: none;
    &::placeholder {
        color: ${({ theme }) => theme.textColor};
    }

    &:focus {
        border-bottom: solid 2px ${({ theme }) => theme.accentColor};
    }
`;

export {
    FormStyle,
    FieldTitle,
    FormField,
    Input,
    InputArea,
    NameEmailContainer,
};
