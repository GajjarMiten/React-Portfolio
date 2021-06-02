import React from "react";
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

import { AnimatePresence, motion } from "framer-motion";
import SoundDiv from "../soundDiv/SoundDiv";
import AnimatedIcon from "../animatedIcon/AnimatedIcon";
import volum from "react-useanimations/lib/volume";
import { useSettings } from "../../provider/Settings.provider";

const navItems = [
    { icon: "las la-home", title: "HOME" },
    { icon: "las la-user-circle", title: "ABOUT" },
    { icon: "las la-cog", title: "SKILL" },
    { icon: "las la-trophy", title: "WORK" },
    { icon: "las la-envelope", title: "CONTACT" },
];

const motionProps = {
    initial: { opacity: 0, y: "-100%" },
    animate: {
        opacity: 1,
        y: "0",
        transition: {
            type: "tween",
            duration: 0.4,
            staggerChildren: 0.1,
        },
    },
    exit: { opacity: 0 },
};

const Navbar: React.FC = () => {
    return (
        <AnimatePresence>
            <Nav>
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
