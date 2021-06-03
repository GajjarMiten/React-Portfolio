import styled from "styled-components";
import { device } from "../style/mediaQueries";

const Text = styled.p<{ asHeading?: boolean }>`
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme, asHeading }) =>
        asHeading ? theme.headingLG : theme.textLG};
    font-family: "Mali", sans-serif;

    @media ${device.laptopL} {
        font-size: ${({ theme, asHeading }) =>
            asHeading ? theme.headingLG : theme.textLG};
    }

    @media ${device.laptop} {
        font-size: ${({ theme, asHeading }) =>
            asHeading ? theme.headingMD : theme.textSM};
    }
    @media ${device.mobileM} {
        font-size: ${({ theme, asHeading }) =>
            asHeading ? theme.headingSM : theme.textSM};
    }
`;

const BottomBorder = styled.div.attrs({ className: "bottom-border" })<{
    marginH?: number;
}>`
    margin: ${({ marginH }) => `0 ${marginH ? marginH : 0}px`};
    /* border-bottom: ${({ theme }) => `dashed 2px ${theme.accentColor}`}; */
    position: relative;
    padding-bottom: 2rem;
    @media ${device.tablet} {
        margin: ${({ marginH }) => `0 ${marginH ? 60 : 0}px`};
    }
    @media ${device.mobileL} {
        margin: ${({ marginH }) => `0 ${marginH ? 20 : 0}px`};
    }

    &::after {
        position: absolute;
        width: 200px;
        top: 40%;
        margin-left: 3rem;
        content: "";
        border-bottom: ${({ theme }) => `dashed 2px ${theme.accentColor}`};
    }

    @media ${device.mobileL} {
        &::after {
            display: none;
            width: 100%;
        }
    }
`;

export { Text, BottomBorder };
