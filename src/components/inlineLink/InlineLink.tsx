import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const StylishLink = styled(motion.a)`
    text-decoration: none;
    color: ${({ theme }) => theme.accentColor};
    font-family: ${({ theme }) => theme.fontText};
    font-size: ${({ theme }) => theme.textLG};
    overflow: hidden;
    position: relative;
    padding: 0 5px;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 5px;
        transition: all 0.2s ease-in;
    }
    &:hover {
        &::after {
            border: solid 2px white;

            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.accentColor};
        }
    }
    @media ${device.laptopL} {
        font-size: ${({ theme }) => theme.textSM};
    }
`;

const InlineLink: React.FC<{ link: string }> = ({ children, link }) => {
    return (
        <StylishLink href={link} className="focusable">
            {children}
        </StylishLink>
    );
};

export default InlineLink;
