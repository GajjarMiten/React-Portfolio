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

const WorkPage = () => {
    return (
        <Wrapper>
            <BottomBorder>
                <BouncyText offset={600} text="Things&nbsp;I've&nbsp;built" />
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

const ProjectCard: React.FC<{ img: string; tech: string[] }> = ({
    img,
    tech,
}) => {
    return (
        <ProjectCardStyle>
            <ProjectImg>
                <img src={img} alt="img" aria-hidden />
            </ProjectImg>
            <ProjectInfo>
                <h1 className="title">bitstobytes.in</h1>
                <div className="info">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad consectetur, neque, sunt autem optio aliquid
                        veritatis doloribus. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Cumque doloribus, nam
                        libero provident consectetur repudiandae corrupti
                        molestiae quaerat sint nihil quas quia ipsam? Id
                        corrupti laboriosam illo accusantium maiores laudantium.
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
