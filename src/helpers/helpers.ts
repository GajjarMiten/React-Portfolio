const animateTitle = (offset: number) => {
    const p = document.getElementById(offset.toString());
    const pos = p?.getBoundingClientRect().top;
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

    if (pos && pos < 900 && offset === 100) {
        animate();
    }
    const container = document.getElementById("container") as HTMLDivElement;

    const doAnimate = () => {
        const pos = p?.getBoundingClientRect().top;

        if (pos && pos < 700 && offset >= 200) {
            animate();
        }
    };

    container.addEventListener("scroll", doAnimate);
};

const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min)) + min;

const range = (start: number, end?: number, step = 1): number[] => {
    const output: number[] = [];
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

export { animateTitle, random, range };
