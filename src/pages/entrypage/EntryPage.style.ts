import styled from "styled-components";
import { center } from "../../style/global";

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    min-height: 400px;
    min-width: 500px;
    position: relative;
    flex-direction: column;
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

export { Container, Blur };
