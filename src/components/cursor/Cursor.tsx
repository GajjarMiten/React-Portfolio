import React, { useEffect } from "react";
import { CursorStyle } from "./Cursor.style";
import { useMotionValue, useSpring } from "framer-motion";

const Cursor: React.VFC = () => {
    const cursorProps = {
        x: -100,
        y: -100,
        height: 32,
        width: 32,
        borderRadius: 4,
    };
    let isStuck = false;

    const cursorOpacity = useMotionValue(1);
    const cursorHeight = useMotionValue(cursorProps.height);
    const cursorWidth = useMotionValue(cursorProps.width);
    const cursorX = useMotionValue(cursorProps.x);
    const cursorY = useMotionValue(cursorProps.y);
    const cursorBR = useMotionValue(cursorProps.borderRadius);

    const springConfig = { damping: 25, stiffness: 120 };

    const cursorRotate = useSpring(cursorX, springConfig);
    const cursorOpacitySpring = useSpring(cursorOpacity, springConfig);
    const cursorHeightSpring = useSpring(cursorHeight, springConfig);
    const cursorWidthSpring = useSpring(cursorWidth, springConfig);
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const moveCursor = (e: MouseEvent) => {
        if (!isStuck) {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        }
    };

    const handleMouseEnter = (e: any) => {
        const target = e.currentTarget.getBoundingClientRect();
        isStuck = true;
        cursorX.set(target.left);
        cursorY.set(target.top);
        cursorHeightSpring.set(target.height);
        cursorWidthSpring.set(target.width);
        cursorBR.set(12);
        cursorRotate.set(0);
        cursorOpacitySpring.set(0);
    };
    const handleMouseLeave = (e: any) => {
        cursorHeightSpring.set(32);
        cursorWidthSpring.set(32);
        cursorRotate.set(cursorX);
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        cursorOpacitySpring.set(1);
        cursorBR.set(4);
        isStuck = false;
    };

    useEffect(() => {
        window.addEventListener("mousemove", moveCursor);
        const focusables = document.querySelectorAll(
            ".focusable"
        ) as NodeListOf<HTMLDivElement>;

        focusables.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            focusables.forEach((item) => {
                item.removeEventListener("mouseenter", handleMouseEnter);
                item.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <CursorStyle
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                rotateZ: cursorRotate,
                height: cursorHeightSpring,
                width: cursorWidthSpring,
                borderRadius: cursorBR,
                opacity: cursorOpacitySpring,
            }}
        />
    );
};

export default Cursor;
