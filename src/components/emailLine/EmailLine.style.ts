import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../style/mediaQueries";

const Email = styled(motion.a).attrs({
    href: "mailto:miten3377@gmail.com",
    className: "focusable",
})`
    text-decoration: none;
    color: white;
    display: inline-flex;
    align-items: center;
    position: absolute;
    height: 50px;
    padding: 0 1rem;
    bottom: 250px;
    right: -20px;
    z-index: 10;
    font-size: 1.2rem;
    font-family: "Mali", sans-serif;
    
    &::after {
        position: absolute;
        top: 50%;
        transform: translateX(70%);
        /* transform: translateX(20px); */
        content: "";
        height: 1px;
        width: 300px;
        border: solid 1px white;
    }
    @media ${device.laptopL} {
        font-size: ${() => "0.8rem"};
        bottom: 180px;
        &::after {
            transform: translateX(50%);
        }
    }
    @media ${device.tablet} {
        display: none;
    }
`;

export { Email };
