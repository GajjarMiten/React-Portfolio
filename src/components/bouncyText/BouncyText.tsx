import React, { useEffect } from "react";
import { BouncyWord } from "./BouncyText.style";

const BouncyText: React.FC<{ text: string; offset: number }> = ({
    text,
    offset = 0,
}) => {
    useEffect(() => {
        const words = document.querySelectorAll(".word");
        let time = 300 + offset;
        words.forEach((word) => {
            setTimeout(() => {
                word.classList.add("bounceIn");
            }, time);
            time += 100;
        });
    }, []);

    return (
        <p>
            {Array.from({ length: text.length }, (_, idx) => {
                return (
                    <BouncyWord
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.remove("bounceIn");
                            e.currentTarget.classList.add("bounce");
                        }}
                        onAnimationEnd={(e) => {
                            if (e.animationName === "bounce") {
                            }
                            e.currentTarget.classList.remove("bounce");
                        }}
                        key={idx}
                    >
                        {text.charAt(idx)}
                    </BouncyWord>
                );
            })}
        </p>
    );
};

export default BouncyText;
