import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center } from "../../style/utils";

const Container = styled.div`
    margin-top: 3rem;
    flex: 1;
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
    grid-auto-rows: minmax(500px, 1fr);

    @media ${device.laptopL} {
        padding: 0;
        gap: 5rem;
    }
    @media ${device.tablet} {
        padding: 0;
    }
    @media ${device.mobileL} {
        gap: 1rem;
    }
`;

const ProjectCardStyle = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    min-height: 100%;
    max-height: 700px;

    &:nth-of-type(even) {
        .img {
            grid-column: 5/-1;
        }
        .project-info {
            grid-column: 1/6;
            .title {
                text-align: left;
            }
            .info {
                place-self: center left;
                text-align: left;
            }
            .tech,
            .links {
                justify-content: flex-start;
            }
        }
    }
    @media ${device.tablet} {
        min-height: 300px;
        max-height: 350px;
        &:nth-of-type(even) {
            .img {
                grid-column: 5/-1;
            }
            .project-info {
                grid-column: 1/8;
            }
        }
    }
    @media ${device.mobileL} {
        max-height: 100%;
        display: block;

        .project-info {
            .title {
                text-align: center;
            }
            .info {
                min-width: 100%;
            }
            .tech,
            .links {
                padding: 0;
                justify-content: center;
            }
            &:nth-of-type(even) {
                .title {
                    text-align: center;
                }
                .tech,
                .links {
                    padding: 0;
                    justify-content: center;
                }
            }
        }
    }
`;

const ProjectImg = styled.div.attrs({ className: "img" })`
    grid-column: 1/7;
    grid-row: 1/-1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 0%;
    z-index: 1;

    @media ${device.tablet} {
    }
    @media ${device.mobileL} {
        background-position: 50% 0%;
        height: 200px;
        width: 100%;
        grid-column: 1/-1;
    }
`;

const ProjectInfo = styled.div.attrs({ className: "project-info" })`
    max-height: 500px;
    grid-column: 5/-1;
    position: relative;
    grid-row: 1/-1;
    z-index: 2;

    & .title {
        margin-bottom: 10px;
        text-align: right;
        font-family: ${({ theme }) => theme.fontText};
        color: white;
        font-size: ${({ theme }) => theme.headingMD};
    }

    & .info {
        padding: 0 2rem;
        text-align: right;
        min-height: 200px;
        box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.14);
        ${center}
        transition:all 0.3s ease-in;
        border-radius: 5px;
        color: ${({ theme }) => theme.textColor};
        min-width: 400px;
        background-color: ${({ theme }) => theme.navBackGround};

        & p {
            font-family: ${({ theme }) => theme.fontText};
            font-size: ${({ theme }) => theme.textMD};
        }
        &:hover {
            box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.5);
        }
    }
    & .tech,
    & .links {
        margin-top: 10px;

        gap: 10px;
        color: ${({ theme }) => theme.textColor};
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        & div {
            height: 50px;
            width: 100px;
            ${center}
        }
        & p {
            font-size: ${({ theme }) => theme.textSM};
            font-family: ${({ theme }) => theme.fontText};
        }
    }

    @media ${device.laptop} {
        & .title {
            font-size: ${({ theme }) => theme.headingSM};
        }

        & .info {
            & p {
                font-size: ${({ theme }) => theme.textSM};
            }
        }
    }

    @media ${device.tablet} {
        & .title {
            font-size: ${({ theme }) => theme.headingSM};
        }

        & .info {
            min-height: 100px;
            max-width: 200px;
            padding: 1rem 1rem;
        }
    }
    @media ${device.tablet} {
        position: static;

        & .title {
            font-size: ${({ theme }) => theme.headingSM};
        }

        & .info {
            width: 100%;
            text-align: left;
        }
        .tech,
        .links {
            padding: 0;
            justify-content: flex-end;
        }
    }

    @media ${device.mobileS} {
        .info {
            min-width: 100%;
            max-width: 100%;
        }
    }
`;

export { Container, ProjectCardStyle, ProjectImg, ProjectInfo };
