import { motion } from "framer-motion";
import styled from "styled-components";
import { device, size } from "../../style/mediaQueries";
import { center, column } from "../../style/utils";

const Nav = styled(motion.nav).attrs({ id: "navbar" })`
    padding: 0px 28px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    max-width: ${size.laptopL};
    width: 100%;
    height: ${({ theme }) => theme.navbarWidth};
    background: rgba(24, 24, 24, 0.4);
    transition: all 0.3s ease-out;
    backdrop-filter: blur(5px);
    z-index: 19;
    @media ${device.laptopL} {
        /* width: ${({ theme }) => theme.navbarWidthMD}; */
    }
    @media ${device.tablet} {
        padding: 0 20px;
        width: 100vw;
        height: ${({ theme }) => theme.navbarWidth};
        flex-direction: row;
    }
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.4);
    @media ${device.mobileL} {
        padding: 0 20px;
    }
    li {
        list-style: none;
    }
    border-bottom: solid 2px ${({ theme }) => theme.accentColor};
`;

const NavBrand = styled(motion.a).attrs({ href: "/" })`
    text-decoration: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 60px;
        width: 60px;
        @media ${device.laptopL} {
            height: 55px;
            width: 55px;
        }

        @media ${device.laptop} {
            height: 50px;
            width: 50px;
        }

        @media ${device.tablet} {
            height: 40px;
            width: 40px;
        }
    }
    @media ${device.laptopL} {
        height: 55px;
        width: 55px;
    }

    @media ${device.laptop} {
        height: 50px;
        width: 50px;
    }

    @media ${device.tablet} {
        height: 40px;
        width: 40px;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const NavItem = styled(motion.a)`
    ${center};
    text-decoration: none;
    color: ${({ theme }) => theme.iconColor};
    height: 40px;
    width: 100px;
    /* &.active {
        color: ${({ theme }) => theme.accentColor};
    } */
    img {
        display: none;
        height: 30px;
        width: 30px;
    }
    p {
        font-family: ${({ theme }) => theme.fontText};
        font-size: ${({ theme }) => theme.textMD};
    }
    &:hover {
        /* cursor: pointer; */

        p {
            text-shadow: 0px 0px 5px ${({ theme }) => theme.accentColor};
            color: ${({ theme }) => theme.accentColor};
            display: block;
        }
    }

    @media ${device.laptopL} {
        p {
            font-size: ${({ theme }) => theme.textMD};
        }
    }

    @media ${device.laptop} {
        p {
            font-size: ${() => "1rem"};
        }
    }

    @media ${device.tablet} {
        p {
            font-size: ${({ theme }) => theme.textSM};
            font-family: ${({ theme }) => theme.fontText};
        }
    }
    @media ${device.mobileL} {
        width: 100%;
        img {
            display: block;
        }
        p {
            display: none;
            font-size: ${({ theme }) => theme.textSM};
            font-family: ${({ theme }) => theme.fontText};
        }
    }
`;

const NavItems = styled(motion.ul)`
    ${center};
    width: 100%;
    flex: 2;

    @media ${device.tablet} {
        justify-content: center;
    }

    @media ${device.mobileL} {
        justify-content: space-around;
    }
`;

const ExtraItems = styled(NavItems)`
    max-height: 150px;
    flex: 0;
    overflow-y: hidden;
    @media ${device.laptopL} {
        max-height: 130px;
        gap: 20px;
    }
    @media ${device.mobileL} {
        display: none;
    }
`;

const ExtraItem = styled(NavItem)`
    width: 20px;
    margin-right: 5px;
    img {
        transform: scale(0.8);
        display: block;
    }
    &:hover {
    }
`;

export { Nav, NavBrand, NavItem, NavItems, ExtraItem, ExtraItems };
