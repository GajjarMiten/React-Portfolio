import React from "react";

import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
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

import {
    AnimatePresence,
    AnimateSharedLayout,
    useAnimation,
} from "framer-motion";

import {
    projectDetailsVariants,
    projectImgVariant,
    projectInfoVariants,
} from "./WorkPage.variants";
import Sparkles from "../../components/sparkle/Sparkle";
import AnimatedIcon from "../../components/animatedIcon/AnimatedIcon";

import github from "react-useanimations/lib/github";
import mmx from "react-useanimations/lib/maximizeMinimize2";

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
                />
                <ProjectCard
                    img="https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fptf2.png?alt=media&token=39947c38-4fbe-469b-9e8d-119300b0bcf1"
                    title="Portfolio V1.0"
                    description="A responsive portfolio website built using Flutter web for showcasing my profile and uses Firebase for hostig"
                    tech={["Flutter", "Firebase"]}
                    links={["https://github.com/GajjarMiten/Flutter-Portfolio"]}
                />
                <ProjectCard
                    img={
                        "https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fcovbit.png?alt=media&token=76703fea-d491-46a2-8f36-dc820ae36540"
                    }
                    title="CovBit"
                    description="An all in one application to get updated with COVID-19 news, to do self-assessment, to get notification of nearby people to maintain social distancing and to track the location of COVID-19 positive user."
                    tech={["Flutter", "Firebase", "CovidAPI"]}
                    links={["https://github.com/GajjarMiten/CovBit"]}
                />
                <ProjectCard
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
    const controls = useAnimation();

    return (
        <ProjectCardWrapper
            onMouseEnter={async () => {
                controls.start("animate");
            }}
            onMouseLeave={async () => {
                controls.start("end");
                controls.start("initial");
            }}
        >
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    <ProjectImg
                        src={img}
                        loading="lazy"
                        variants={projectImgVariant}
                        initial="initial"
                        animate={controls}
                    />

                    <ProjectInfo
                        key={img}
                        variants={projectInfoVariants}
                        initial="initial"
                        animate={controls}
                    >
                        <ProjectTitle>
                            <Sparkles color="#ff5e78" textColor="#FFF">
                                {title}
                            </Sparkles>
                        </ProjectTitle>
                        <ProjectDetails
                            variants={projectDetailsVariants}
                            initial="initial"
                            animate={controls}
                        >
                            <ProjectDispcription
                                variants={projectDetailsVariants}
                            >
                                {description}
                            </ProjectDispcription>
                            <TechStack variants={projectDetailsVariants}>
                                {tech.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </TechStack>
                            <Links variants={projectDetailsVariants}>
                                {links?.map((link, idx) => {
                                    if (idx == 0) {
                                        return (
                                            <LinkButton
                                                href={link}
                                                target="_blank"
                                            >
                                                <AnimatedIcon
                                                    animation={github}
                                                    size={40}
                                                    color="#fdb99b"
                                                />
                                            </LinkButton>
                                        );
                                    }
                                    if (link) {
                                        return (
                                            <LinkButton
                                                href={link}
                                                target="_blank"
                                            >
                                                <AnimatedIcon
                                                    animation={mmx}
                                                    size={40}
                                                    color="#fdb99b"
                                                />
                                            </LinkButton>
                                        );
                                    }
                                })}
                            </Links>
                        </ProjectDetails>
                    </ProjectInfo>
                </AnimatePresence>
            </AnimateSharedLayout>
        </ProjectCardWrapper>
    );
};
