import styled from "styled-components";
import { device } from "../../style/mediaQueries";
import { center, column } from "../../style/utils";

const Nav = styled.nav`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: ${({ theme }) => theme.navbarWidth};
    background: ${({ theme }) => theme.navBackGround};

    @media ${device.laptop} {
        width: ${({ theme }) => theme.navbarWidthMD};
    }
    @media ${device.tablet} {
        padding: 0 20px;
        width: 100vw;
        height: ${({ theme }) => theme.navbarWidth};
        flex-direction: row;
    }
`;

const NavBrand = styled.a.attrs({ href: "/" })`
    text-decoration: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 100%;
        width: 100%;
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
`;

const NavItem = styled.a`
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
        i {
            display: none;
        }
        p {
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
            font-size: ${({ theme }) => "0.8rem"};
        }
    }

    @media ${device.tablet} {
        i {
            font-size: 1.6rem;
        }
        p {
            font-size: ${({ theme }) => theme.textSM};
        }
    }
`;

const NavItems = styled.ul`
    ${center};
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    flex: 1;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: flex-end;
        flex: 0;
    }
`;

const SocialItems = styled(NavItems)`
    max-height: 150px;
    gap: 4px;
`;

const SocialItem = styled(NavItem)`
    i {
        font-size: 1.6rem;
    }
    &:hover {
        i {
            display: block;
            color: ${({ theme }) => theme.accentColor};
        }
    }
`;

export { Nav, NavBrand, NavItem, NavItems, SocialItem, SocialItems };
