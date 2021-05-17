import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center } from "../../style/utils";

const Container = styled.div`
    margin-top: 6rem;
    flex: 1;
    width: 100%;
    padding: 0 150px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
    grid-auto-rows: minmax(500px, 1fr);

    @media ${device.tablet} {
        padding: 0;
        gap: 0rem;
    }
`;

const ProjectCardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    min-height: 500px;
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
`;

const ProjectImg = styled.div.attrs({ className: "img" })`
    grid-column: 1/6;
    grid-row: 1/-1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 30%;
    z-index: 1;

    @media ${device.tablet} {
        background-position: 0 20%;
    } ;
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
        grid-row: 1/4;
        text-align: right;
        font-family: "Mali", sans-serif;
        color: white;
        font-size: ${({ theme }) => theme.headingMD};
        @media ${device.laptop} {
            font-size: ${({ theme }) => theme.headingSM};
        }

        @media ${device.tablet} {
            font-size: ${({ theme }) => theme.headingSM};
            grid-row: 1/2;
        }
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
        @media ${device.tablet} {
            min-height: 100px;
            max-width: 200px;
            padding: 1rem 1rem;
            grid-row: 3/6;
        }
        & p {
            font-family: "Mali", sans-serif;
            font-size: ${({ theme }) => theme.textMD};
            @media ${device.laptop} {
                font-size: ${({ theme }) => theme.textSM};
            }
            @media ${device.tablet} {
                font-size: ${({ theme }) => theme.textSM};
            }
        }
        &:hover {
            box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.5);
        }
    }
    & .tech,
    & .links {
        padding-left: 2rem;
        gap: 2rem;
        color: ${({ theme }) => theme.textColor};
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
        & p {
            font-size: ${({ theme }) => theme.textSM};
            font-family: "Mali", sans-serif;
        }
    }

    & .tech {
        grid-row: 10/11;
    }
    & .links {
        grid-row: 11/12;
    }

    @media ${device.tablet} {
        grid-column: 3/-1;
        & .tech {
            grid-row: 7/8;
        }
        & .links {
            grid-row: 8/9;
        }
    }
`;

export { Container, ProjectCardStyle, ProjectImg, ProjectInfo };
