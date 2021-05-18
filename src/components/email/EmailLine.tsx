import React from "react";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const Email = styled.a.attrs({ href: "mailto:miten3377@gmail.com" })`
    text-decoration: none;
    color: white;
    display: inline-block;
    position: fixed;
    bottom: 250px;
    right: -20px;
    transform: rotateZ(90deg);
    z-index: 100;
    font-size: 1.2rem;
    font-family: "Mali", sans-serif;
    transition: all 0.2s ease-in;
    &:hover {
        color: ${({ theme }) => theme.textColor};
        transform: rotateZ(90deg) translateX(-20px);
    }
    &::after {
        position: absolute;
        top: 50%;
        transform: translateX(20px);
        content: "";
        height: 1px;
        width: 300px;
        border: solid 1px white;
    }
    @media ${device.laptopL} {
        font-size: ${({ theme }) => "0.8rem"};
        bottom: 180px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const EmailLine = () => {
    return <Email>miten3377@gmail.com</Email>;
};

export default EmailLine;
