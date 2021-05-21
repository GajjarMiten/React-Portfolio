import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../style/mediaQueries";

const ButtonStyle = styled(motion.button).attrs({ className: "focusable" })`
    padding: 1.3rem;
    width: 300px;
    background: none;
    color: white;
    font-size: ${({ theme }) => theme.textLG};
    font-family: ${({ theme }) => theme.fontText};
    outline: none;
    border: solid 2px white;
    border-radius: 12px;
    &:hover {
        cursor: pointer;
    }
    @media ${device.laptopL} {
        padding: 1rem;
        font-size: ${({ theme }) => theme.textSM};
        max-width: 200px;
    }
`;

export { ButtonStyle };
