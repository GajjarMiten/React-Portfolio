import React from "react";
import styled from "styled-components";

const Focusable = styled.div.attrs({ className: "focusable" })`
    position: relative;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        transition: all 0.2s ease-in;
    }
    &:hover {
        &::after {
            border: solid 2px white;
            border-radius: 12px;
            background-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.accentColor};
        }
    }
`;

const CursorFocus: React.FC = (props: any) => {
    return <Focusable>{props.children}</Focusable>;
};

export default CursorFocus;
