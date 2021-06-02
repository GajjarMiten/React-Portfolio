import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center } from "../../style/utils";

const Container = styled.div`
    margin-top: 3rem;
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
    grid-auto-rows: minmax(500px, 1fr);

    @media ${device.laptopL} {
        padding: 0;
        gap: 5rem;
    }
    @media ${device.tablet} {
        padding: 0;
    }
    @media ${device.mobileL} {
    }
`;

const ProjectImg = styled(motion.img)`
    height: 100%;
    width: 100%;

    object-fit: fill;
    position: absolute;
    top: 0;
    left: 0;

    @media ${device.mobileL} {
        height: fit-content;
        position: static;
        object-fit: contain;
    }
`;

const ProjectDispcription = styled(motion.p)`
    padding: 1rem 0;
    text-align: center;
    max-width: 70%;
    font-family: ${({ theme }) => theme.fontText};
    color: ${({ theme }) => theme.textColor};
    @media ${device.tablet} {
        max-width: 90%;
    }
`;

const TechStack = styled(motion.div)`
    display: flex;
    margin: 0.5rem 0;
    gap: 2rem;
    p {
        text-transform: uppercase;
        /* font-size: ${({ theme }) => theme.headingSM}; */
        font-family: ${({ theme }) => theme.fontText};
        color: ${({ theme }) => theme.textColor};
    }
`;

const Links = styled(TechStack)`
    width: 50%;
    margin-top: 10px;
    padding-top: 10px;
    border-top: dotted 2px white;
    display: flex;
    justify-content: center;
`;

const LinkButton = styled(motion.a).attrs({
    className: "focusable",
    rel: "noreferrer",
})`
    text-decoration: none;
    ${center}
    padding: 5px 0;
    height: 50px;
    width: 70px;
    border-radius: 10px;
    transition: all 0.8s ease-out;
    &:hover {
        border: Solid 2px white;
    }
`;

const ProjectDetails = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectInfo = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media ${device.mobileL} {
        flex: 1;
        height: 100%;
        position: static;
        backdrop-filter: none;
        background: none;
        gap: 0;
    }
`;

const ProjectTitle = styled(motion.h2)`
    padding-top: 25px;
    height: 60px;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.headingSM};
    color: white;
    font-family: ${({ theme }) => theme.fontText};

    @media ${device.mobileL} {
        padding-top: 25px;
        height: 60px;
        font-size: ${({ theme }) => theme.textLG};
    }
`;

const ProjectCardWrapper = styled(motion.div)`
    place-self: center;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: solid 4px ${({ theme }) => theme.accentColor};
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.7);
    width: 100%;
    max-height: 400px;
    max-width: 800px;
    background: ${({ theme }) => theme.primaryColor};
    position: relative;
    cursor: pointer;

    @media ${device.mobileL} {
        border-width: 3px;
        max-height: fit-content;
        max-width: 100%;
        position: static;
        display: flex;
        flex-direction: column;
        pointer-events: none;
    }
`;

export {
    Container,
    ProjectCardWrapper,
    ProjectImg,
    ProjectInfo,
    ProjectTitle,
    ProjectDispcription,
    TechStack,
    Links,
    LinkButton,
    ProjectDetails,
};
