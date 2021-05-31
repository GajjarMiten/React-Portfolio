import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;

    overflow: hidden;
    background: #000;
    /*background: rgba(0,0,0,1.0);*/
    color: #fff;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.4);
`;

const Corner = styled.div`
    position: absolute;
    background: none;
    width: 6em;
    height: 6em;
    font-size: 2px;
    font-size: 10px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    &:after {
        position: absolute;
        content: "";
        display: block;
        width: 0.2em;
        height: 0.2em;
        box-shadow: 0.6em 0em #fff, 0.8em 0em #fff, 1.4em 0em #fff,
            1.6em 0em #fff, 2.4em 0em #fff, 2.6em 0em #fff, 0.6em 0.2em #fff,
            1em 0.2em #fff, 1.2em 0.2em #fff, 1.6em 0.2em #fff, 2.2em 0.2em #fff,
            2.8em 0.2em #fff, 4.2em 0.2em #fff, 0.8em 0.4em #fff,
            1.6em 0.4em #fff, 2.4em 0.4em #fff, 2.8em 0.4em #fff,
            3.2em 0.4em #fff, 3.4em 0.4em #fff, 3.6em 0.4em #fff, 4em 0.4em #fff,
            4.4em 0.4em #fff, 4.8em 0.4em #fff, 5.2em 0.4em #fff, 0em 0.6em #fff,
            0.2em 0.6em #fff, 1em 0.6em #fff, 1.6em 0.6em #fff, 2.8em 0.6em #fff,
            4.2em 0.6em #fff, 0em 0.8em #fff, 0.4em 0.8em #fff, 1.6em 0.8em #fff,
            2.6em 0.8em #fff, 0.2em 1em #fff, 0.6em 1em #fff, 0.8em 1em #fff,
            1em 1em #fff, 1.2em 1em #fff, 1.6em 1em #fff, 2em 1em #fff,
            2.2em 1em #fff, 2.4em 1em #fff, 0.2em 1.2em #fff, 1.6em 1.2em #fff,
            0em 1.4em #fff, 1em 1.4em #fff, 1.8em 1.4em #fff, 0em 1.6em #fff,
            0.2em 1.6em #fff, 0.4em 1.6em #fff, 0.6em 1.6em #fff, 1em 1.6em #fff,
            2em 1.6em #fff, 1em 1.8em #fff, 1.4em 1.8em #fff, 2em 1.8em #fff,
            1em 2em #fff, 1.6em 2em #fff, 1.8em 2em #fff, 2em 2em #fff,
            0.2em 2.2em #fff, 1em 2.2em #fff, 2.2em 2.2em #fff, 2.6em 2.2em #fff,
            0em 2.4em #fff, 0.4em 2.4em #fff, 1em 2.4em #fff, 0em 2.6em #fff,
            0.8em 2.6em #fff, 2.2em 2.6em #fff, 0.2em 2.8em #fff,
            0.4em 2.8em #fff, 0.6em 2.8em #fff, 0.4em 3.2em #fff,
            0.4em 3.4em #fff, 0.4em 3.6em #fff, 0.4em 4em #fff, 0.2em 4.2em #fff,
            0.6em 4.2em #fff, 0.4em 4.4em #fff, 0.4em 4.8em #fff,
            0.4em 5.2em #fff;
    }
`;

const TopLeftCorner = styled(Corner)`
    top: 0;
    left: 0;
    -webkit-transform: rotate(360deg) scale(0.6);
    transform: rotate(360deg) scale(0.6);
`;

const TopRightCorner = styled(Corner)`
    top: 0;
    right: 0;
    transform: rotate(90deg) scale(0.6);
`;

const BottomLeftCorner = styled(Corner)`
    bottom: 0;
    left: 0;
    transform: rotate(270deg) scale(0.6);
`;

const BottomRightCorner = styled(Corner)`
    bottom: 0px;
    right: 0px;
    transform: rotate(180deg) scale(0.6);
`;

export {
    Wrapper,
    TopLeftCorner,
    TopRightCorner,
    BottomLeftCorner,
    BottomRightCorner,
};
