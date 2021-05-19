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
                place-self: center left;
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
        max-height: 500px;
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
        &:nth-of-type(even) {
            .project-info {
                .title {
                    place-self: center;
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
    background-position: 0 30%;
    z-index: 1;

    @media ${device.tablet} {
        background-position: 0 20%;
    }

    @media ${device.mobileL} {
        height: 200px;
        width: 100%;
        grid-column: 1/-1;
    }
`;

const ProjectInfo = styled.div.attrs({ className: "project-info" })`
    max-height: 500px;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: 1fr;
    grid-column: 5/-1;
    position: relative;
    grid-row: 1/-1;
    z-index: 2;

    & .title {
        place-self: center right;
        margin-bottom: 10px;
        grid-row: 1/4;
        text-align: right;
        font-family: "Mali", sans-serif;
        color: white;
        font-size: ${({ theme }) => theme.headingMD};
    }

    & .info {
        place-self: center right;
        padding: 0 2rem;
        text-align: right;
        grid-row: 4/10;
        min-height: 200px;
        box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.14);
        ${center}
        transition:all 0.3s linear;
        border-radius: 5px;
        color: ${({ theme }) => theme.textColor};
        min-width: 400px;
        background-color: ${({ theme }) => theme.navBackGround};

        & p {
            font-family: "Mali", sans-serif;
            font-size: ${({ theme }) => theme.textMD};
        }
        &:hover {
            box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.5);
        }
    }
    & .tech,
    & .links {
        margin-top: 10px;
        padding-left: 2rem;
        gap: 2rem;
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
            font-family: "Mali", sans-serif;
        }
    }

    & .tech {
        grid-row: 7/8;
    }
    & .links {
        grid-row: 8/9;
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
        grid-column: 3/-1;

        & .title {
            font-size: ${({ theme }) => theme.headingSM};
            grid-row: 1/2;
        }

        & .info {
            min-height: 100px;
            max-width: 200px;
            padding: 1rem 1rem;
            grid-row: 3/6;
        }

        & .tech {
            grid-row: 7/8;
        }
        & .links {
            grid-row: 8/9;
        }
    }
    @media ${device.mobileL} {
        position: static;

        & .title {
            place-self: center;
            text-align: center;
            font-size: ${({ theme }) => theme.headingSM};
        }

        & .info {
            width: 100%;
            min-width: 100%;
            text-align: left;
        }
        .tech,
        .links {
            padding: 0;
            justify-content: center;
        }
        .tech {
            grid-row: 4/5;
        }
        .links {
            grid-row: 5/6;
        }
    }
`;

export { Container, ProjectCardStyle, ProjectImg, ProjectInfo };
