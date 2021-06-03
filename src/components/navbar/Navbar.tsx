import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Nav, NavBrand, NavItem, NavItems,ExtraItem,ExtraItems } from "./Navbar.style";

import { handleNavClick } from "./Navbar.helper";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import SoundDiv from "../soundDiv/SoundDiv";
import AnimatedIcon from "../animatedIcon/AnimatedIcon";
import volum from "react-useanimations/lib/volume";
import { useSettings } from "../../provider/Settings.provider";

const navItems = [
    { icon: "las la-home", title: "Home" },
    { icon: "las la-user-circle", title: "About" },
    { icon: "las la-cog", title: "Experince" },
    { icon: "las la-trophy", title: "Work" },
    { icon: "las la-envelope", title: "Contact" },
];

const motionProps = {
    initial: { opacity: 0, y: "100%" },
    animate: {
        opacity: 1,
        y: "0",
        transition: {
            type: "tween",
            duration: 0.4,
            staggerChildren: 0.2,
        },
    },
    exit: { opacity: 0 },
};

const navVariants = {
    hide: {
        y: "-100%",
        trasition: {
            type: "tween",
            ease: "easeOut",
            duration: 1,
        },
    },
    show: {
        y: "0%",
        trasition: {
            type: "tween",
            ease: "easeOut",
            duration: 1,
        },
    },
};

const Navbar: React.FC = () => {
    const controls = useAnimation();
    let isHidden = false;
    let oldScroll = 0;

    const handleScroll = (e: any) => {
        const top = e.target.scrollTop;
        const navbar = document.getElementById("navbar")!;
        if (top > 600) {
            navbar.style.position = "fixed";
        }
        if (top < 600) {
            navbar.style.position = "static";
        }

        if (top > oldScroll && top > 600 && !isHidden) {
            isHidden = true;
            controls.start("hide");
        } else if (top < oldScroll && top > 600 && isHidden) {
            isHidden = false;
            controls.start("show");
        }
        oldScroll = top;
    };

    useEffect(() => {
        const container = document.getElementById(
            "container"
        ) as HTMLDivElement;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            <Nav variants={navVariants} animate={controls}>
                <motion.div {...motionProps}>
                    <NavBrand>
                        <img src={logo} alt="logo" />
                    </NavBrand>
                </motion.div>
                <NavItems
                    variants={motionProps}
                    initial="initial"
                    animate="animate"
                >
                    {navItems.map((item, idx) => {
                        return (
                            <li key={idx.toString()}>
                                <SoundDiv>
                                    <NavItem
                                        className={idx === 0 ? "active" : ""}
                                        id={idx.toString()}
                                        onClick={() =>
                                            handleNavClick(idx, navItems)
                                        }
                                        variants={motionProps}
                                    >
                                        <i className={`${item.icon}`}></i>
                                        <p>{item.title}</p>
                                    </NavItem>
                                </SoundDiv>
                            </li>
                        );
                    })}
                </NavItems>

                <motion.div
                    variants={motionProps}
                    initial="initial"
                    animate="animate"
                >
                    <ExtraItems>
                        <li>
                            <ExtraItem as={motion.div} variants={motionProps}>
                                <i className="lab la-blogger"></i>
                            </ExtraItem>
                        </li>
                        <li>
                            <ExtraItem as={motion.div} variants={motionProps}>
                                <i className="las la-terminal"></i>
                            </ExtraItem>
                        </li>
                        <li>
                            <ExtraItem as={motion.div} variants={motionProps}>
                                <SoundIcon />
                            </ExtraItem>
                        </li>
                    </ExtraItems>
                </motion.div>
            </Nav>
        </AnimatePresence>
    );
};

export default Navbar;

const SoundIcon: React.FC = () => {
    const { value: sound, toggleSound } = useSettings();

    return (
        <AnimatedIcon
            animation={volum}
            loop={false}
            size={30}
            color="#838383"
            reversed={!sound}
            onClick={toggleSound}
        />
    );
};
