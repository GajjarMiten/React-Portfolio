import styled from "styled-components";
import { device } from "../style/mediaQueries";

const Text = styled.p<{ asHeading?: boolean }>`
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme, asHeading }) =>
        asHeading ? theme.headingLG : theme.textLG};
    font-family: "Mali", sans-serif;

    @media ${device.laptopL} {
        font-size: ${({ theme, asHeading }) =>
            asHeading ? theme.headingLG : theme.textSM};
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
    border-bottom: ${({ theme }) => `dashed 2px ${theme.accentColor}`};
    padding-bottom: 2rem;
    @media ${device.mobileL} {
        margin: ${({ marginH }) => `0 ${marginH ? 20 : 0}px`};
    }
`;

export { Text, BottomBorder };
