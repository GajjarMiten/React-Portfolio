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

export { handleNavClick };
