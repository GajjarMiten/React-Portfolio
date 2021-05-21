import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const Wrapper = styled.section`
    /* min-height: 100vh; */
    min-width: 100%;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    /* border: solid 2px white; */
    @media ${device.tablet} {
        padding: 0 40px;
    }

    @media ${device.mobileL} {
        padding: 0 20px;
    }
`;

export default Wrapper;
