import styled from "styled-components";
import { comeInOut, spin } from "../../style/animations";

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
`;
const SparkleWrapper = styled.span`
    position: absolute;
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${comeInOut} 700ms forwards;
    }
`;
const SparkleSvg = styled.svg`
    display: block;
    @media (prefers-reduced-motion: no-preference) {
        animation: ${spin} 1000ms linear;
    }
`;
const ChildWrapper = styled.strong`
    position: relative;
    z-index: 1;
    color: ${({ theme }) => theme.accentColor};
    font-family: ${({ theme }) => theme.fontText};

    button & {
        color: ${({ theme }) => "white"};
    }
    button:hover & {
        color: ${({ theme }) => theme.textColor};
    }
`;

export { Wrapper, ChildWrapper, SparkleSvg, SparkleWrapper };
