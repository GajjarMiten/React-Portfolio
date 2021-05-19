import styled from "styled-components";
import { motion } from "framer-motion";
const CursorStyle = styled(motion.div).attrs({ id: "cursor" })`
    pointer-events: none;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;

    border: solid 2px white;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.accentColor};
`;

export { CursorStyle };
