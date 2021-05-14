import styled from "styled-components";
import { center } from "../../style/global";

const Container = styled.div`
    margin-top: 6rem;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 150px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10rem;
    grid-auto-rows: minmax(500px, 1fr);
`;

const ProjectCardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 1fr;
    width: 100%;
    min-height: 300px;
    max-height: 500px;

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
                text-align: left;
            }
            .tech,
            .links {
                justify-content: flex-start;
            }
        }
    }
`;

const ProjectImg = styled.div.attrs({ className: "img" })`
    grid-column: 1/6;
    grid-row: 1/-1;
    height: 500px;
    width: 100%;
    & > img {
        border-radius: 10px;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
    z-index: 1;
`;

const ProjectInfo = styled.div.attrs({ className: "project-info" })`
    max-height: 500px;
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: 1fr;
    flex-direction: column;
    grid-column: 5/-1;
    position: relative;
    grid-row: 1/-1;
    z-index: 2;
    align-items: flex-end;
    & .title {
        place-self: center right;
        grid-row: 1/4;
        text-align: right;
        font-family: "Mali", sans-serif;
        color: white;
        font-size: ${({ theme }) => theme.headingMD};
    }

    & .info {
        padding: 0 2rem;
        text-align: right;
        grid-row: 4/10;
        height: 100%;
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
`;

export { Container, ProjectCardStyle, ProjectImg, ProjectInfo };
