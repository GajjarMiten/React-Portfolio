import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Profile from "../../components/profile/Profile";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder, Text } from "../../global/GlobalComponents";
import { About, Container } from "./AboutPage.style";

const AboutPage = () => {
    return (
        <Wrapper>
            <BottomBorder>
                <BouncyText text="About&nbsp;Me" offset={400} />
            </BottomBorder>
            <Container>
                <About>
                    <Text>
                        Hey Folks👋! I am Miten Gajjar. A 20years old Software Engineer
                        powered by coffee and VS Code and weeb who loves anime
                        and gaming. I am new to community so I prefer to keep
                        learning, continue challenging myself, and do
                        interesting things. I am passionate about building
                        excellent web and mobile apps that improves the lives of
                        people around me.
                    </Text>
                </About>
                <Profile />
            </Container>
        </Wrapper>
    );
};

export default AboutPage;
