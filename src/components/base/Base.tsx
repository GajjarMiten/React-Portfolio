import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const spark = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:0.8;
    }
`;

const Dot = styled.circle`
    opacity: ${Math.random()};
    fill: white;
    animation: ${spark} 3s linear infinite alternate;
`;

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    /* overflow:hidden */
`;

const Container = styled(Wrapper)`
    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
    z-index: 10;
`;

const Base: React.FC = (props) => {
    const [dots, setDots] = useState<any>([]);

    const updateDots = (svg: any) => {
        const newDots = Array.from({ length: 100 }, (item, idx) => {
            return (
                <Dot
                    key={idx}
                    cx={Math.floor(Math.random() * svg.clientWidth)}
                    cy={Math.floor(Math.random() * svg.clientHeight)}
                    r={Math.floor(Math.random() * 3 + 2)}
                    style={{
                        animationDelay: `${Math.random()}s`,
                        transition: `all 15s linear`,
                    }}
                />
            );
        });
        setDots(newDots);
    };

    // useEffect(() => {
    //     const svg = document.querySelector("svg")!;
    //     updateDots(svg);
    //     setTimeout(() => {
    //         animate(svg);
    //     }, 100);
    //     setInterval(() => {
    //         animate(svg);
    //     }, 15000);
    // }, []);

    const animate = (svg: any) => {
        const circles = document.querySelectorAll("circle");
        circles.forEach((circle) => {
            circle.setAttribute("cx", `${Math.random() * svg.clientWidth}`);
            circle.setAttribute("cy", `${Math.random() * svg.clientHeight}`);
        });
    };

    return (
        <Wrapper>
            <svg
                height="100%"
                width="100%"
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: 4,
                }}
            >
                {dots}
            </svg>
            <Container>{props.children}</Container>
        </Wrapper>
    );
};

export default Base;
