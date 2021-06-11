import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Button from "../../components/button/Button";

import { Text } from "../../global/GlobalComponents";
import SlideInWhenIn from "../../hoc/SlideInWhenIn";
import { Container, Wrapper } from "./EntryPage.style";

import Navbar from "../../components/navbar/Navbar";

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
                    <Button onClick={handleClick}>Say Hello 👋</Button>
                </SlideInWhenIn>
            </Container>
            <Navbar />
        </Wrapper>
    );
};

export default EntryPage;
