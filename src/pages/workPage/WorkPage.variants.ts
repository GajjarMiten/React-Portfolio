import { Variants } from "framer-motion/types/types";

const projectInfoVariants: Variants = {
    initial: {
        top: "75%",
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        },
    },

    animate: {
        top: 0,

        height: "100%",
        width: "100%",
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        },
    },
    end: {
        top: "75%",
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const projectImgVariant: Variants = {
    initial: {
        scale: 1,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        },
    },
    animate: {
        scale: 1.4,
        transition: {
            type: "tween",
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const projectDetailsVariants: Variants = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
    initialMob: {
        y: "00%",
        opacity: 1,
    },
};

const projectCardvariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export {
    projectImgVariant,
    projectInfoVariants,
    projectDetailsVariants,
    projectCardvariants,
};
