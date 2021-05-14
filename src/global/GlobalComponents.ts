import styled from "styled-components";

const Text = styled.p`
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme }) => theme.textLG};
    font-family: "Mali", sans-serif;
`;

const BottomBorder = styled.div`
    border-bottom: ${({ theme }) => `dashed 2px ${theme.accentColor}`};
    padding-bottom:2rem;
`;

export { Text, BottomBorder };
