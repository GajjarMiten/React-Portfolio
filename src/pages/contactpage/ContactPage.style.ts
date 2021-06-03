import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center, column } from "../../style/utils";

const Container = styled.div`
    display: grid;
    flex: 1;
    padding: 0 100px;
    grid-template-columns: 0.9fr 1fr;
    grid-template-rows: 100%;
    padding-top: 2rem;
    gap: 1rem;

    @media ${device.tablet} {
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr;
        padding: 0 60px;
        padding-top: 3rem;
        gap: 5rem;
    }
    @media ${device.mobileL} {
        padding: 0 20px;
        padding-top: 3rem;
    }
`;

const ContactInfo = styled(motion.div)`
    height: 100%;
    width: 100%;
    ${column}
    padding-right: 2rem;
    @media ${device.laptopL} {
        padding-right: 0;
    }
`;

const InfoTextCard = styled(motion.div)`
    min-height: 200px;
    width: 100%;
    position: relative;
    border-radius: 12px;
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.14);
    background-color: ${({ theme }) => theme.navBackGround};
    transition: all 0.3s linear;
    ${center}
    &:hover {
        box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.5);
    }
    & p {
        padding: 10px 2rem;
        font-family: ${({ theme }) => theme.fontText};
        color: ${({ theme }) => theme.textColor};
        font-size: ${({ theme }) => theme.textLG};
    }

    @media ${device.laptopL} {
        min-height: 150px;
        & p {
            font-size: ${({ theme }) => theme.textSM};
        }
    }

    @media ${device.mobileL} {
        padding: 1rem;
    }
`;

const SocialBar = styled(motion.div)`
    width: 100%;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const SocialIcon = styled(motion.a).attrs({
    target: "_blank",
    rel: "noreferrer",
})`
    padding: 10px;

    i {
        color: white;
        font-size: ${({ theme }) => `calc(${theme.headingLG} + 20px)`};
    }

    &:hover {
        i {
            color: ${({ theme }) => theme.accentColor};
        }
    }

    @media ${device.laptopL} {
        i {
            font-size: ${({ theme }) => theme.headingLG};
        }
    }

    @media ${device.mobileL} {
        i {
            font-size: ${({ theme }) => theme.headingMD};
        }
    }
    @media ${device.mobileS} {
        i {
            font-size: ${({ theme }) => theme.headingSM};
        }
    }
`;

const MadeWithLine = styled(motion.p)`
    margin-bottom: 80px;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fontText};
    font-size: ${({ theme }) => theme.textLG};
    @media ${device.laptopL} {
        font-size: ${({ theme }) => theme.textSM};
    }
`;

export {
    Container,
    ContactInfo,
    InfoTextCard,
    SocialBar,
    MadeWithLine,
    SocialIcon,
};
