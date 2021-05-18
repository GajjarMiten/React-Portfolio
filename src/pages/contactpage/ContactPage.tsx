import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";
import { BottomBorder } from "../../global/GlobalComponents";
import { Container } from "./ContactPage.style";

const ContactPage = () => {
    return (
        <Wrapper style={{ minHeight: "100vh", padding: "0" }}>
            <BottomBorder marginH={100}>
                <BouncyText id={500} text="Say&nbsp;Hello!!" />
            </BottomBorder>
            <Container>
                {/* <Wave height={190} delay={4} />
                <Wave height={170} delay={0} /> */}
            </Container>
        </Wrapper>
    );
};

export default ContactPage;

const Wave: React.FC<{ height: number; delay: number }> = ({
    height,
    delay,
}) => {
    return (
        <svg
            width="100%"
            height={`${height}px`}
            // transform="rotateX(180deg)"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: "absolute",
                width: "100%",
                bottom: "0%",
                left: "0",
                opacity: "1",
                animationDuration: "4s",
                animationDelay: `${delay}s`,
                animationIterationCount: "infinite",
                animationDirection: "alternate",
            }}
        >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A770EF" />
                <stop offset="50%" stopColor="#CF8BF3" />
                <stop offset="100%" stopColor="#FDB99B" />
            </linearGradient>
            <path
                stroke="rgba(255,255,255,0.5)"
                fill="url(#grad1)"
                style={{ filter: "drop-shadow(0 -5px 25px rgba(0,0,0,0.15))" }}
                d="M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z"
            >
                <animate
                    repeatCount="indefinite"
                    fill="url(#grad1)"
                    attributeName="d"
                    begin={`${delay}s`}
                    dur="15s"
                    attributeType="XML"
                    values="M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z; M0 77 C 473,-40 1222,283 1920,136 V 359 H 0 V 67 Z; M0 77 C 973,260 1722,-53 1920,120 V 359 H 0 V 67 Z;M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z"
                ></animate>
            </path>
        </svg>
    );
};
