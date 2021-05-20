import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Profile from "../../components/profile/Profile";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder, Text } from "../../global/GlobalComponents";
import SlideInWhenIn from "../../hoc/SlideInWhenIn";
import Sparkle from "../../components/sparkle/Sparkle";
import { About, Container } from "./AboutPage.style";

const AboutPage = () => {
    return (
        <Wrapper style={{ minHeight: "100vh", overflow: "hidden" }}>
            <BottomBorder>
                <BouncyText text="About&nbsp;Me" id={200} />
            </BottomBorder>
            <Container>
                <About>
                    <SlideInWhenIn>
                        <Text>
                            Hey Folks👋! I am <Sparkle>Miten Gajjar</Sparkle>. A
                            20years old Software Engineer powered by coffee and
                            VS Code and weeb who loves anime and gaming. I am
                            new to community so I prefer to keep learning,
                            continue challenging myself, and do interesting
                            things. I am passionate about building excellent web
                            and mobile apps that improves the lives of people
                            around me.
                        </Text>
                    </SlideInWhenIn>
                </About>
                <Profile />
            </Container>
        </Wrapper>
    );
};

export default AboutPage;
