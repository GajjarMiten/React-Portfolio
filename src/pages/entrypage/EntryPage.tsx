import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Button from "../../components/button/Button";
import SoundDiv from "../../components/soundDiv/SoundDiv";
import Wrapper from "../../components/wrapper/Wrapper";
import { Text } from "../../global/GlobalComponents";
import SlideInWhenIn from "../../hoc/SlideInWhenIn";
import { Container } from "./EntryPage.style";

import boop from "../../assets/sounds/boop.mp3";

const EntryPage: React.VFC = () => {
    const handleClick = () => {
        document.getElementById("500")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Wrapper>
            <Container>
                <SlideInWhenIn>
                    <Text asHeading>Hi,</Text>
                    <BouncyText text="I'm&nbsp;Miten," id={100} index={4} />
                    <Text asHeading>On a way to be creative.</Text>
                    <Text>I am self-taught, independent developer from</Text>
                    <Text>Gujarat, India.</Text>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <SoundDiv soundProp={boop}>
                        <Button onClick={handleClick}>Say Hello 🙋‍♂️</Button>
                    </SoundDiv>
                </SlideInWhenIn>
            </Container>
        </Wrapper>
    );
};

export default EntryPage;
