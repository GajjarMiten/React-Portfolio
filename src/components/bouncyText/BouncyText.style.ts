import styled from "styled-components";
import { device } from "../../style/mediaQueries";
// import {colors} from "../../style/global"

const BouncyWord = styled.span.attrs({ className: "word" })`
    display: inline-block;
    font-weight: "bold";
    font-size: ${({ theme }) => theme.headingLG};
    color: ${({ color }) => color};
    font-family: "Fredoka One", cursive;
    /* margin: 0 4px; */
    opacity: 0;
    transition: transform 0.3s ease-out;
    animation-duration: 1s;
    animation-direction: both;
    animation-fill-mode: forwards;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.accentColor};
    }
    @media ${device.laptop} {
        font-size: ${({ theme }) => theme.headingMD};
    }
`;

export { BouncyWord };
