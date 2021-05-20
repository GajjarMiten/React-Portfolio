const handleNavClick = (index: number, navItems: any[]): void => {
    navItems.forEach((i, idx) => {
        if (idx === index) {
            document.getElementById(idx.toString())?.classList.add("active");
            try {
                let block: ScrollLogicalPosition = "start";
                if (idx === 0) {
                    block = "center";
                }
                document
                    .getElementById(((idx + 1) * 100).toString())
                    ?.scrollIntoView({
                        block: block,
                        behavior: "smooth",
                    });
            } catch (error) {
                alert(error.error);
            }
        } else {
            document.getElementById(idx.toString())?.classList.remove("active");
        }
    });
};

const animateTitle = (offset: number): void => {
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
    container.addEventListener("scroll", () => {
        const pos = p?.getBoundingClientRect().top;

        if (pos && pos < 700 && offset >= 200) {
            animate();
        }
    });
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

export { handleNavClick, animateTitle, random, range };
