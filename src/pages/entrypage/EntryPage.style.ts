import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const Wrapper = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 60px;
`;

const Container = styled.div`
    padding: 0 100px;
    display: flex;
    justify-content: center;
    min-height: 400px;
    min-width: 500px;
    position: relative;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 0 40px;
    }

    @media ${device.mobileL} {
        padding: 0 20px;
        min-width: 100%;
    }
`;

export { Container, Wrapper };
