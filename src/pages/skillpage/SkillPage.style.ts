import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { column } from "../../style/utils";

const Container = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    ${column};
`;

const SkillWrapper = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
    width: 100%;
    ${column};
    /* justify-content: center; */
`;

const Skills = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ParallexWrapper = styled.div.attrs({ id: "parallex-wrapper" })`
    position: absolute;
    z-index: 2;
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
`;

const Parallex = styled.div.attrs({ id: "parallex" })`
    position: relative;
    transition: all 0.1s linear;
    height: 100%;
    width: 100%;
`;

const ParallexItem = styled.p<{ x: number; y: number; size: number }>`
    position: absolute;
    top: ${({ y }) => `${y}%`};
    left: ${({ x }) => `${x}%`};
    opacity: 0.5;
    font-weight: bold;
    font-family: "Mali", sans-serif;
    color: ${({ theme }) => theme.accentColor};

    @media ${device.mobileL} {
        font-size: ${() => `1.2rem`};
    }
`;

const SkillItem = styled.img`
    height: 150px;
    width: 150px;
`;

const SkillSVG = styled.svg`
    height: 64px;
    width: 64px;

    transform: scale(2.34);
    @media ${device.laptop} {
        transform: scale(1.2);
    }
    @media ${device.tablet} {
        transform: scale(1.5);
    }
    @media ${device.mobileL} {
        transform: scale(0.9);
    }
`;

export {
    Container,
    SkillWrapper,
    Skills,
    ParallexWrapper,
    Parallex,
    ParallexItem,
    SkillItem,
    SkillSVG,
};
