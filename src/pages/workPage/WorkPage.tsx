import React from "react";

import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
import githubIcon from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import {
    Container,
    LinkButton,
    Links,
    ProjectCardWrapper,
    ProjectDetails,
    ProjectDispcription,
    ProjectImg,
    ProjectInfo,
    ProjectTitle,
    TechStack,
} from "./WorkPage.style";

import { AnimatePresence, useAnimation } from "framer-motion";

import {
    projectCardvariants,
    projectDetailsVariants,
    projectImgVariant,
    projectInfoVariants,
} from "./WorkPage.variants";
import useInViewAnimate from "../../hooks/useInViewAnimate";

const WorkPage: React.VFC = () => {
    return (
        <Wrapper>
            <BottomBorder>
                <BouncyText id={400} text="Creations" />
            </BottomBorder>
            <Container>
                <ProjectCard
                    img="https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fb2b.png?alt=media&token=9a386d66-515f-40b9-8b0f-6ddd1a4f6eda"
                    title="BitsToBytes.in"
                    description="A simple and minimal website created by me for representing our programming club BitsToBytes at college level."
                    tech={["ReactJS", "Firebase"]}
                    links={[
                        "https://github.com/Bits-to-Bytes/Bits-to-Bytes-React",
                        "https://bitstobytes.in",
                    ]}
                    key="1"
                />
                <ProjectCard
                    key="2"
                    img="https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fptf2.png?alt=media&token=39947c38-4fbe-469b-9e8d-119300b0bcf1"
                    title="Portfolio V1.0"
                    description="A responsive portfolio website built using Flutter web for showcasing my profile and uses Firebase for hosting"
                    tech={["Flutter", "Firebase"]}
                    links={["https://github.com/GajjarMiten/Flutter-Portfolio"]}
                />
                <ProjectCard
                    key="3"
                    img={
                        "https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fcovbit.png?alt=media&token=76703fea-d491-46a2-8f36-dc820ae36540"
                    }
                    title="CovBit"
                    description="An all in one application to get updated with COVID-19 news, to do self-assessment, to get notification of nearby people to maintain social distancing and to track the location of COVID-19 positive user."
                    tech={["Flutter", "Firebase", "CovidAPI"]}
                    links={["https://github.com/GajjarMiten/CovBit"]}
                />
                <ProjectCard
                    key="4"
                    img="https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Ftictactoe.png?alt=media&token=9fdd8825-4d02-484c-9f4f-89f136ccadf1"
                    title="TicTacToe"
                    description="A multiplayer TicTacToe game built using with flutter with bloc pattern. It uses Minimax algorithm for making pradiction of next move"
                    tech={["Flutter", "Firebase"]}
                    links={[
                        "https://github.com/GajjarMiten/Flutter-tic-tac-toe",
                    ]}
                />
            </Container>
        </Wrapper>
    );
};

export default WorkPage;

const ProjectCard: React.FC<{
    img: string;
    title: string;
    description: string;
    tech: string[];
    links?: string[];
}> = ({ img, title, description, tech, links }) => {
    const projectInfoControls = useAnimation();

    const { ref, controls } = useInViewAnimate("hidden", "animate");

    return (
        <ProjectCardWrapper
            ref={ref}
            variants={projectCardvariants}
            initial="hidden"
            animate={controls}
            onMouseEnter={async () => {
                projectInfoControls.start("animate");
            }}
            onMouseLeave={async () => {
                projectInfoControls.start("end");
                projectInfoControls.start("initial");
            }}
        >
            <AnimatePresence>
                <ProjectImg
                    src={img}
                    loading="lazy"
                    variants={projectImgVariant}
                    initial="initial"
                    animate={projectInfoControls}
                    alt="project-img"
                />

                <ProjectInfo
                    key={img}
                    variants={projectInfoVariants}
                    initial="initial"
                    animate={projectInfoControls}
                >
                    <ProjectTitle>
                        {/* <Sparkles color="#ff5e78" textColor="#FFF"> */}
                        {title}
                        {/* </Sparkles> */}
                    </ProjectTitle>
                    <ProjectDetails
                        variants={projectDetailsVariants}
                        initial="initial"
                        animate={projectInfoControls}
                    >
                        <ProjectDispcription variants={projectDetailsVariants}>
                            {description}
                        </ProjectDispcription>
                        <TechStack variants={projectDetailsVariants}>
                            {tech.map((item, idx) => (
                                <p key={idx.toString()}>{item}</p>
                            ))}
                        </TechStack>
                        <Links variants={projectDetailsVariants}>
                            {links?.map((link, idx) => {
                                if (idx == 0) {
                                    return (
                                        <LinkButton
                                            href={link}
                                            target="_blank"
                                            key="g-link"
                                        >
                                            <img
                                                src={githubIcon}
                                                alt="github-svg"
                                            />
                                        </LinkButton>
                                    );
                                }
                                if (link) {
                                    return (
                                        <LinkButton
                                            href={link}
                                            target="_blank"
                                            key="web-link"
                                        >
                                            <img
                                                src={linkIcon}
                                                alt="link-svg"
                                            />
                                        </LinkButton>
                                    );
                                }
                            })}
                        </Links>
                    </ProjectDetails>
                </ProjectInfo>
            </AnimatePresence>
        </ProjectCardWrapper>
    );
};
