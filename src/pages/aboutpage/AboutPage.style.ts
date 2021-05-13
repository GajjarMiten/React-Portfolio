import styled from "styled-components";
import { center } from "../../style/global";

const Container = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr; */
    place-content: center;
    place-items: center;
`;

const About = styled.div`
    ${center}
    flex-direction:column;
    max-width: 50vw;
    /* text-align: center; */
`;

export { Container, About };
