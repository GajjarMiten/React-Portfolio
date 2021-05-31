import React from "react";
import {
    Wrapper,
    TopLeftCorner,
    TopRightCorner,
    BottomLeftCorner,
    BottomRightCorner,
} from "./StyledCard.style";

const StyledCard: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <TopLeftCorner />
            <TopRightCorner />
            <BottomLeftCorner />
            <BottomRightCorner />
            {children}
        </Wrapper>
    );
};

export default StyledCard;
