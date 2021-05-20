import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import ContactForm from "../../components/conatctForm/ContactForm";
import InlineLink from "../../components/inlineLink/InlineLink";
import Sparkle from "../../components/sparkle/Sparkle";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
import {
    ContactInfo,
    Container,
    InfoTextCard,
    MadeWithLine,
    SocialBar,
} from "./ContactPage.style";

const ContactPage: React.VFC = () => {
    return (
        <Wrapper style={{ minHeight: "100vh", padding: "0" }}>
            <BottomBorder marginH={100}>
                <BouncyText id={500} text="Contact" />
            </BottomBorder>
            <Container>
                <ContactForm />
                <ContactInfo>
                    <InfoTextCard>
                        <p>
                            Have any question or want to talk with me ? You can
                            easily connect with me via email at
                            <InlineLink link="mailto:miten3377@gmail.com">
                                miten3377@gmail.com
                            </InlineLink>
                            or feel free to drop a message in the form!😃
                        </p>
                    </InfoTextCard>
                    <SocialBar />
                    <MadeWithLine>
                        Made With ❤️ By <Sparkle>Miten Gajjar</Sparkle>
                    </MadeWithLine>
                </ContactInfo>
            </Container>
        </Wrapper>
    );
};

export default ContactPage;
