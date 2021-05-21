import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Button from "../../components/button/Button";
import Wrapper from "../../components/wrapper/Wrapper";
import { Text } from "../../global/GlobalComponents";
import SlideInWhenIn from "../../hoc/SlideInWhenIn";
import { Container } from "./EntryPage.style";
import wave from "../../assets/wave.gif";

const EntryPage: React.VFC = () => {
    const handleClick = () => {
        document.getElementById("500")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Wrapper>
            <Container>
                <SlideInWhenIn delay={1.4}>
                    <Text asHeading>Hi,</Text>
                    <BouncyText text="I'm&nbsp;Miten," id={100} index={4} />
                    <Text asHeading>On a way to be creative.</Text>
                    <Text>I am self-taught, independent developer from</Text>
                    <Text>Gujarat, India.</Text>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <Button onClick={handleClick}>Say Hello 🙋‍♂️</Button>
                </SlideInWhenIn>
            </Container>
        </Wrapper>
    );
};

export default EntryPage;
