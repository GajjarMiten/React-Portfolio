import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center } from "../../style/utils";

const Container = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;
    place-items: center;
    @media ${device.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const About = styled.div`
    ${center}
    flex-direction:column;
    max-width: 50vw;
    /* text-align: center; */
    @media ${device.tablet} {
        max-width: 100%;
    }
`;

export { Container, About };
