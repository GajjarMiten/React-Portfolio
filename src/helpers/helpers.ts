const handleNavClick = (index: number, navItems: any[]) => {
    navItems.forEach((i, idx) => {
        if (idx === index) {
            document.getElementById(idx.toString())!.classList.add("active");
            try {
                let block: ScrollLogicalPosition = "start";
                if (idx === 0) {
                    block = "center";
                }
                document
                    .getElementById(((idx + 1) * 100).toString())!
                    .scrollIntoView({
                        block: block,
                        behavior: "smooth",
                    });
            } catch (error) {}
        } else {
            document.getElementById(idx.toString())!.classList.remove("active");
        }
    });
};

const animateTitle = (offset: number) => {
    const p = document.getElementById(offset.toString())!;
    let pos = p.getBoundingClientRect().top;
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

    if (pos < 900 && offset === 100) {
        animate();
    }
    const container = document.getElementById("container")! as HTMLDivElement;
    container.addEventListener("scroll", (e) => {


        const pos = p.getBoundingClientRect().top;

        if (pos < 700 && offset >= 200) {
            animate();
        }
    });
};

export { handleNavClick, animateTitle };
