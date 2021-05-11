import styled from "styled-components";
import { center } from "../../style/global";

const Container = styled.div`
    ${center}
    height: fit-content;
    width: fit-content;
    min-height: 400px;
    min-width: 500px;
    position: relative;
    flex-direction: column;
    padding: 1rem;
`;

const Blur = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    border-radius: 10px;
    left: 0;
    background: rgba(255, 255, 255, 0.1);
    z-index: 2;
    /* filter: blur(px); */
`;

const TextContainer = styled(Container)`
    z-index: 3;
`;

export { Container, Blur, TextContainer };
