import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { Container, Blur, TextContainer } from "./EntryPage.style";

const EntryPage: React.VFC = () => {
    return (
        <Wrapper
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container>
                <Blur />
                <TextContainer>
                    <BouncyText text="Hi," offset={200} />
                    <BouncyText text="I'm&nbsp;Miten," offset={200} />
                    <BouncyText text="Flutter&nbsp;Developer," offset={200} />
                    {/*dept. of enthusiasm */}
                </TextContainer>
            </Container>
        </Wrapper>
    );
};

export default EntryPage;
