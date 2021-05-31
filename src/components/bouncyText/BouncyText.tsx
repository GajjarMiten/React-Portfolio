import React, { useEffect } from "react";
import { theme } from "../../style/global";
import { BouncyWord } from "./BouncyText.style";

import { animateTitle } from "../../helpers/helpers";

const BouncyText: React.FC<{
    text: string;
    id: number;
    index?: number;
}> = ({ text, id = 0, index = -1 }) => {
    useEffect(() => {
        animateTitle(id);
    }, []);

    return (
        <span id={id.toString()}>
            {Array.from({ length: text.length }, (_, idx) => {
                let color = "white";
                if (idx === index) {
                    color = theme.accentColor;
                }
                return (
                    <BouncyWord
                        onClick={(e) => {
                            e.currentTarget.classList.remove("bounceIn");
                            e.currentTarget.classList.add("bounce");
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.remove("bounceIn");
                            e.currentTarget.classList.add("bounce");
                        }}
                        onAnimationEnd={(e) => {
                            // if (e.animationName === "bounce") {
                            // }
                            e.currentTarget.classList.remove("bounce");
                        }}
                        key={idx}
                        color={color}
                    >
                        {text.charAt(idx)}
                    </BouncyWord>
                );
            })}
        </span>
    );
};

export default BouncyText;
