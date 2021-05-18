import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
import {
    Container,
    ProjectCardStyle,
    ProjectImg,
    ProjectInfo,
} from "./WorkPage.style";

import b2b from "../../assets/projects/b2b.png";
import tt from "../../assets/projects/tictactoe.png";
import cb from "../../assets/projects/covbit.png";

import useInViewAnimate from "../../hooks/useInViewAnimate";

const WorkPage: React.VFC = () => {
    return (
        <Wrapper>
            <BottomBorder>
                <BouncyText id={400} text="Creations" />
            </BottomBorder>
            <Container>
                <ProjectCard img={b2b} tech={["ReactJS", "Firebase"]} />
                <ProjectCard
                    img={cb}
                    tech={["Flutter", "Covid API", "Firebase"]}
                />
                <ProjectCard img={tt} tech={["Flutter"]} />
                {/* <ProjectCard />
                <ProjectCard /> */}
            </Container>
        </Wrapper>
    );
};

export default WorkPage;

const projectCardVariants = {
    hidden: {
        opacity: 0,
        y: "100px",
    },
    visible: {
        opacity: 1,
        y: "0",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 2,
            delay: 0.8,
        },
    },
};

const ProjectCard: React.FC<{ img: string; tech: string[] }> = ({
    img,
    tech,
}) => {
    const { ref, controls } = useInViewAnimate("hidden", "visible");

    return (
        <ProjectCardStyle
            ref={ref}
            variants={projectCardVariants}
            initial="hidden"
            animate={controls}
        >
            <ProjectImg style={{ backgroundImage: `url(${img})` }}></ProjectImg>
            <ProjectInfo>
                <h1 className="title">bitstobytes.in</h1>
                <div className="info">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad consectetur, neque, sunt autem optio aliquid
                        veritatis doloribus. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Cumque doloribus, nam
                    </p>
                </div>
                <ul className="tech">
                    {tech.map((i, idx) => {
                        return (
                            <li key={idx}>
                                <p>{i}</p>
                            </li>
                        );
                    })}
                </ul>
                <ul className="links">
                    <li>Github</li>
                    <li>Web</li>
                </ul>
            </ProjectInfo>
        </ProjectCardStyle>
    );
};
