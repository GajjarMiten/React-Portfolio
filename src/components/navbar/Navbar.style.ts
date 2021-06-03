import { motion } from "framer-motion";
import styled from "styled-components";
import { device, size } from "../../style/mediaQueries";
import { center, column } from "../../style/utils";

const Nav = styled(motion.nav).attrs({ id: "navbar" })`
    padding: 0px 40px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    max-width: ${size.laptopL};
    width: 100%;
    height: ${({ theme }) => theme.navbarWidth};
    background: rgba(24, 24, 24, 0.8);
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
    i {
        font-size: 2.6rem;
        display: none;
    }
    p {
        font-family: ${({ theme }) => theme.fontText};
        font-size: ${({ theme }) => theme.textMD};
    }
    &:hover {
        cursor: pointer;
        i {
            display: none;
        }
        p {
            text-shadow: 0px 0px 5px ${({ theme }) => theme.accentColor};
            color: ${({ theme }) => theme.accentColor};
            display: block;
        }
    }

    @media ${device.laptopL} {
        i {
            font-size: 2rem;
        }
        p {
            font-size: ${({ theme }) => theme.textMD};
        }
    }

    @media ${device.laptop} {
        i {
            font-size: 1.6rem;
        }
        p {
            font-size: ${() => "1rem"};
        }
    }

    @media ${device.tablet} {
        i {
            font-size: 2.3rem;
        }
        p {
            font-size: ${({ theme }) => theme.textSM};
            font-family: ${({ theme }) => theme.fontText};
        }
    }
    @media ${device.mobileL} {
        width: 100%;
        i {
            font-size: 2rem;
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
    display: flex;
    /* justify-content: flex-end; */
    /* flex-direction: column; */

    width: 100%;
    flex: 2;

    @media ${device.laptopL} {
        gap: 8px;
    }

    @media ${device.tablet} {
        justify-content: center;
    }

    @media ${device.mobileL} {
        justify-content: space-around;
        gap: 0;
    }
`;

const ExtraItems = styled(NavItems)`
    max-height: 150px;
    gap: 8px;
    flex: 0;

    @media ${device.laptopL} {
        max-height: 130px;
        gap: 4px;
    }
    @media ${device.mobileL} {
        display: none;
    }
`;

const ExtraItem = styled(NavItem)`
    width: 100%;
    i {
        display: block;
    }
    &:hover {
        i {
            display: block;
            color: ${({ theme }) => theme.accentColor};
        }
    }

    @media ${device.laptopL} {
        i {
            font-size: 1.6rem;
        }
    }
`;

export { Nav, NavBrand, NavItem, NavItems, ExtraItem, ExtraItems };
