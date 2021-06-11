import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {
    Nav,
    NavBrand,
    NavItem,
    NavItems,
    ExtraItem,
    ExtraItems,
} from "./Navbar.style";

import { handleNavClick } from "./Navbar.helper";

import { AnimatePresence, motion, useAnimation } from "framer-motion";

import { useSettings } from "../../provider/Settings.provider";

import home from "../../assets/icons/home.svg";
import account from "../../assets/icons/account.svg";
import experience from "../../assets/icons/experience.svg";
import trophy from "../../assets/icons/trophy.svg";
import envelope from "../../assets/icons/envelope.svg";
import blog from "../../assets/icons/blog.svg";
import code from "../../assets/icons/code.svg";
import volume from "../../assets/icons/volume.svg";
import mute from "../../assets/icons/mute.svg";

const navItems = [
    { icon: home, title: "Home" },
    { icon: account, title: "About" },
    { icon: experience, title: "Experince" },
    { icon: trophy, title: "Work" },
    { icon: envelope, title: "Contact" },
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
                                <NavItem
                                    className={idx === 0 ? "active" : ""}
                                    id={idx.toString()}
                                    onClick={() =>
                                        handleNavClick(idx, navItems)
                                    }
                                    variants={motionProps}
                                >
                                    <img src={item.icon} alt="nav-icon" />
                                    <p>{item.title}</p>
                                </NavItem>
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
                                <img src={blog} alt="nav-icon" />
                            </ExtraItem>
                        </li>
                        <li>
                            <ExtraItem as={motion.div} variants={motionProps}>
                                <img src={code} alt="nav-icon" />
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

const soundVariants = {
    animate: {
        y: ["-100%", "0%"],
        opacity: [0, 1],
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.7,
        },
    },
};

const SoundIcon: React.FC = () => {
    const { value: sound, toggleSound } = useSettings();

    const controls = useAnimation();

    useEffect(() => {
        controls.start("animate");
    }, [sound]);

    return (
        <motion.img
            src={sound ? mute : volume}
            alt="nav-icon"
            variants={soundVariants}
            animate={controls}
            onTap={() => {
                toggleSound();
            }}
        />
    );
};
