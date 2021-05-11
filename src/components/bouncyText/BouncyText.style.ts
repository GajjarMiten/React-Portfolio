import styled from "styled-components";

const BouncyWord = styled.span.attrs({ className: "word" })`
    display: inline-block;
    font-size: ${({ theme }) => theme.headingLG};
    color: ${({ theme }) => theme.headingColor};
    font-family: "Pacifico", cursive;
    /* margin: 0 10px; */
    transition: transform 0.3s ease-out;
    animation-duration: 1s;
    animation-direction: both;
    &:hover {
        color: ${({ theme }) => theme.accentColor};
    }
`;

export { BouncyWord };
