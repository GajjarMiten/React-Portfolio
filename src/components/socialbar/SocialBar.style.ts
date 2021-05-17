import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const SocialBarWrapper = styled.div`
    position: absolute;

    z-index: 20;
    top: -10px;
    right: 0;
    height: 170px;
    width: 600px;
    overflow: hidden;
    transform-origin: center right;

    div > a:last-child {
        height: 69px;
        top: -1px;
        right: -14%;
    }

    &:hover {
        div > a {
            span {
                opacity: 1;
            }
            &:nth-child(1) {
                right: 250px;
            }
            &:nth-child(2) {
                right: 180px;
            }
            &:nth-child(3) {
                right: 110px;
            }
            &:nth-child(4) {
                right: 40px;
            }
            &:nth-child(5) {
                right: -30px;
            }
        }
    }
    & > div {
        top: 50px;
        position: relative;
        height: inherit;
        width: 600px;
    }
    &::after,
    &::before {
        z-index: 1;
        transition: all 0.5s ease-in;
        transition-delay: 0.2s;
        position: absolute;
        content: "";
        right: -5%;
        background-color: transparent;
        height: 20px;
        width: 20px;
        border-right: solid 30px #181818;
    }
    &::after {
        bottom: 53%;
        border-bottom: solid 30px #181818;
        border-bottom-right-radius: 50px;
    }
    &::before {
        top: 52%;
        border-top: solid 30px #181818;
        border-top-right-radius: 50px;
    }

    @media ${device.laptop} {
        transform: scale(0.7);
        top: -30px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const SocialButton = styled.a<{ color: string }>`
    z-index: 3;
    padding: 0 1rem;
    display: flex;
    text-decoration: none;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    height: 67px;
    min-width: 200px;
    top: 0%;
    right: -15%;
    /* transform: translateX(10%); */
    background-color: ${({ color }) => color};
    transition: all 0.7s ease-in;
    color: ${({ theme }) => "white"};
    i {
        /* color: #181818; */
    }
    span {
        transition: all 0.4s ease-in;
        opacity: 0;
        font-size: ${({ theme }) => theme.textMD};
        font-family: "Mali", sans-serif;
    }
`;

export { SocialBarWrapper, SocialButton };
