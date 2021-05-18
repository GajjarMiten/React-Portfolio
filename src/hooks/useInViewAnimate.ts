import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useInViewAnimate = (from: string, to: string) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && !isAnimated) {
            controls.start(to);
            setIsAnimated(true);
        }

        if (!inView && !isAnimated) {
            controls.start(from);
        }
        return controls.stop;
    }, [controls, inView]);

    return { ref, controls };
};

export default useInViewAnimate;
