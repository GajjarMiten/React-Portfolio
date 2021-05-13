import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { Text } from "../../global/GlobalComponents";
import { Container, Blur } from "./EntryPage.style";

const EntryPage: React.VFC = () => {
    return (
        <Wrapper>
            <Container>
                <Text style={{ fontSize: "4rem" }}>Hi,</Text>
                <BouncyText text="I'm&nbsp;Miten," offset={200} index={4} />
                <Text style={{ fontSize: "4rem" }}>
                    On a way to be creative.
                </Text>
                <Text>I am self-taught, independent developer from</Text>
                <Text>Gujarat, India.</Text>
            </Container>
        </Wrapper>
    );
};

export default EntryPage;
