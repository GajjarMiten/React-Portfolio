import { Variants } from "framer-motion";
import React from "react";

import BouncyText from "../../components/bouncyText/BouncyText";
import ContactForm from "../../components/conatctForm/ContactForm";
import InlineLink from "../../components/inlineLink/InlineLink";
import Sparkle from "../../components/sparkle/Sparkle";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import {
    BottomLeftCorner,
    BottomRightCorner,
    TopLeftCorner,
    TopRightCorner,
} from "../../components/styledCard/StyledCard.style";
import {
    ContactInfo,
    Container,
    InfoTextCard,
    MadeWithLine,
    SocialBar,
    SocialIcon,
} from "./ContactPage.style";

import codepen from "../../assets/icons/codepen.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const ContactPage: React.VFC = () => {
    return (
        <Wrapper style={{ minHeight: "100vh", padding: "0" }}>
            <BottomBorder marginH={100}>
                <BouncyText id={500} text="Contact" />
            </BottomBorder>
            <Container>
                <ContactForm />
                <ContactInfoContainer />
            </Container>
        </Wrapper>
    );
};

export default ContactPage;

const socialBarVariant: Variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 90,
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
};

const ContactInfoContainer: React.VFC = () => {
    const { ref, controls } = useInViewAnimate("initial", "animate");

    return (
        <ContactInfo
            ref={ref}
            variants={socialBarVariant}
            initial="initial"
            animate={controls}
        >
            <InfoTextCard variants={socialBarVariant}>
                <TopLeftCorner />
                <TopRightCorner />
                <BottomLeftCorner />
                <BottomRightCorner />
                <p>
                    Have any question or want to talk with me ? You can easily
                    connect with me via email at
                    <InlineLink link="mailto:miten3377@gmail.com">
                        miten3377@gmail.com
                    </InlineLink>
                    or feel free to drop a message in the form!😃
                </p>
            </InfoTextCard>
            <SocialBar variants={socialBarVariant}>
                <SocialIcon href="https://codepen.io/Mi10/">
                    <img src={codepen} alt="social-icon" />
                </SocialIcon>
                <SocialIcon href="https://github.com/GajjarMiten/">
                    <img src={github} alt="social-icon" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/mitengajjar/">
                    <img src={linkedin} alt="social-icon" />
                </SocialIcon>
                <SocialIcon href="https://twitter.com/GajjarMiten/">
                    <img src={twitter} alt="social-icon" />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/_.mi10._/">
                    <img src={instagram} alt="social-icon" />
                </SocialIcon>
            </SocialBar>
            <MadeWithLine variants={socialBarVariant}>
                Made With ❤️ By <Sparkle>Miten Gajjar</Sparkle>
            </MadeWithLine>
        </ContactInfo>
    );
};
