import React from "react";



import { device } from "../../style/mediaQueries";
import styled from "styled-components";

const Wrapper = styled.div.attrs({ id: "container" })`
    height: 100%;
    width: 100%;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    gap: 13rem;
    @media ${device.tablet} {
        gap: 3rem;
    }
`;

const Base: React.FC = ({ children }) => {
    return <Wrapper className="scroll-container">{children}</Wrapper>;
};

export default Base;
