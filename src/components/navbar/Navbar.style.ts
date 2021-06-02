import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center, column } from "../../style/utils";

const Nav = styled(motion.nav)`
    padding: 10px 0;
    ${column}
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: ${({ theme }) => theme.navbarWidth};
    background: ${({ theme }) => theme.navBackGround};

    @media ${device.laptopL} {
        width: ${({ theme }) => theme.navbarWidthMD};
    }
    @media ${device.tablet} {
        padding: 0 20px;
        width: 100vw;
        height: ${({ theme }) => theme.navbarWidth};
        flex-direction: row;
    }

    @media ${device.mobileL} {
        padding: 0 20px;
    }
    li {
        list-style: none;
    }
`;

const NavBrand = styled(motion.a).attrs({ href: "/" })`
    text-decoration: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 100%;
        width: 100%;
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
    width: 100%;
    &.active {
        color: ${({ theme }) => theme.accentColor};
    }
    i {
        font-size: 2.6rem;
    }
    p {
        font-size: 1rem;
        display: none;
    }
    &:hover {
        cursor: pointer;
        i {
            display: none;
        }
        p {
            text-shadow: 0px 0px 10px ${({ theme }) => theme.accentColor};
            color: ${({ theme }) => theme.accentColor};
            display: block;
        }
    }

    @media ${device.laptopL} {
        i {
            font-size: 2rem;
        }
        p {
            font-size: ${({ theme }) => theme.textSM};
        }
    }

    @media ${device.laptop} {
        i {
            font-size: 1.6rem;
        }
        p {
            font-size: ${() => "0.8rem"};
        }
    }

    @media ${device.tablet} {
        i {
            font-size: 2.3rem;
        }
        p {
            font-size: ${({ theme }) => theme.textSM};
        }
    }
`;

const NavItems = styled(motion.ul)`
    ${center};
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    flex: 1;

    @media ${device.laptopL} {
        gap: 8px;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: flex-end;
        flex: 0;
    }

    @media ${device.mobileL} {
        justify-content: space-around;
        flex: 1;
    }
`;

const ExtraItems = styled(NavItems)`
    max-height: 150px;
    gap: 8px;

    @media ${device.laptopL} {
        max-height: 130px;
        gap: 4px;
    }
    @media ${device.mobileL} {
        display: none;
    }
`;

const ExtraItem = styled(NavItem)`
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
