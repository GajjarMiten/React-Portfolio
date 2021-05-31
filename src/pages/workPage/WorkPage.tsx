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

import b2b from "../../assets/projects/b2b.jpg";
import tt from "../../assets/projects/tictactoe.png";
import cb from "../../assets/projects/covbit.png";

import useInViewAnimate from "../../hooks/useInViewAnimate";
import CursorFocus from "../../hoc/CursorFocus";
import {
    BottomLeftCorner,
    BottomRightCorner,
    TopLeftCorner,
    TopRightCorner,
} from "../../components/styledCard/StyledCard.style";
import Sparkles from "../../components/sparkle/Sparkle";

const WorkPage: React.VFC = () => {
    return (
        <Wrapper>
            <BottomBorder>
                <BouncyText id={400} text="Creations" />
            </BottomBorder>
            <Container>
                <ProjectCard
                    img={b2b}
                    tech={["ReactJS", "Firebase"]}
                    title="BitsToBytes.in"
                    description={
                        <p>
                            A web for representing our programming club
                            <Sparkles>&nbsp;BitsToBytes&nbsp;</Sparkles>
                            at college level
                        </p>
                    }
                />
                <ProjectCard
                    img={cb}
                    tech={["Flutter", "Covid API", "Firebase"]}
                    title="CovBit"
                    description=""
                />
                <ProjectCard
                    img={tt}
                    tech={["Flutter"]}
                    title="TicTacToe"
                    description=""
                />
            </Container>
        </Wrapper>
    );
};

export default WorkPage;

const projectCardVariants = {
    hidden: {
        scale: 0.5,
    },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 25,
        },
    },
};

const ProjectCard: React.FC<{
    img: string;
    tech: string[];
    title: string;
    description: any;
}> = ({ img, tech, title, description }) => {
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
                <h1 className="title">{title}</h1>
                <CursorFocus>
                    <div className="info">
                        <TopLeftCorner />
                        <TopRightCorner />
                        <BottomLeftCorner />
                        <BottomRightCorner />
                        <p>{description}</p>
                    </div>
                </CursorFocus>
                <ul className="tech">
                    {tech.map((i, idx) => {
                        return (
                            <div key={idx}>
                                <li>
                                    <p>{i}</p>
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <ul className="links">
                    <CursorFocus>
                        <li>Github</li>
                    </CursorFocus>
                    <CursorFocus>
                        <li>Web</li>
                    </CursorFocus>
                </ul>
            </ProjectInfo>
        </ProjectCardStyle>
    );
};
