import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { Text } from "../../global/GlobalComponents";
import SlideInWhenIn from "../../hoc/SlideInWhenIn";
import { Container } from "./EntryPage.style";

const EntryPage: React.VFC = () => {
    return (
        <Wrapper>
            <Container>
                <SlideInWhenIn>
                    <Text asHeading>Hi,</Text>
                    <BouncyText text="I'm&nbsp;Miten," id={100} index={4} />
                    <Text asHeading>On a way to be creative.</Text>
                    <Text>I am self-taught, independent developer from</Text>
                    <Text>Gujarat, India.</Text>
                </SlideInWhenIn>
            </Container>
        </Wrapper>
    );
};

export default EntryPage;
