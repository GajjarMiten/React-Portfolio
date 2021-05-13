import React, { useEffect } from "react";
import { theme } from "../../style/global";
import { BouncyWord } from "./BouncyText.style";

const BouncyText: React.FC<{
    text: string;
    offset: number;
    index?: number;
}> = ({ text, offset = 0, index = -1 }) => {
    const animate = () => {
        const words = document.querySelectorAll(
            ".word"
        ) as NodeListOf<HTMLSpanElement>;
        let time = 300;
        words.forEach((word) => {
            if (word.parentElement?.id === offset.toString()) {
                setTimeout(() => {
                    word.style.opacity = "1";
                    word.classList.add("bounceIn");
                }, time);
                time += 200;
            }
        });
    };

    useEffect(() => {
        const p = document.getElementById(offset.toString())!;
        let pos = p.getBoundingClientRect().top;

        if (pos < 700 && offset === 200) {
            animate();
        }
        const container = document.getElementById(
            "container"
        )! as HTMLDivElement;
        container.addEventListener("scroll", (e) => {
            const target = e.target as HTMLDivElement;

            let pos = p.getBoundingClientRect().top;

            if (pos < 700 && offset > 200) {
                animate();
            }
        });

        return () => {
            const container = document.getElementById("container")!;
            const newContainer = container.cloneNode(true);
            container.parentNode!.replaceChild(newContainer, container);
        };
    }, []);

    return (
        <span id={offset.toString()}>
            {Array.from({ length: text.length }, (_, idx) => {
                let color = "white";
                if (idx === index) {
                    color = theme.accentColor;
                    console.log(color);
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
                            if (e.animationName === "bounce") {
                            }
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
