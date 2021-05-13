import styled from "styled-components";
import { column } from "../../style/global";

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
    transition: all 0.1s linear;
    display: flex;
`;

const Parallex = styled.div.attrs({ id: "parallex" })`
    position: relative;
    height: 100%;
    width: 100%;
`;

const ParallexItem = styled.p<{ x: Number; y: Number; size: Number }>`
    position: absolute;
    top: ${({ y }) => `${y}%`};
    left: ${({ x }) => `${x}%`};
    opacity: 0.5;
    font-weight: bold;
    font-family: "Mali", sans-serif;
    color: ${({ theme }) => theme.accentColor};
    font-size: ${({ size }) => `${size}rem`};
`;

const SkillItem = styled.img`
    height: 150px;
    width: 150px;
`;

export {
    Container,
    SkillWrapper,
    Skills,
    ParallexWrapper,
    Parallex,
    ParallexItem,
    SkillItem,
};
