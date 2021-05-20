import { useCallback, useEffect, useRef } from "react";
import { random } from "../helpers/helpers";

const useRandomInterval = (
    callback: CallableFunction,
    minDelay: number | null,
    maxDelay: number | null
): (() => void) => {
    const timeoutId = useRef(1);
    const savedCallback = useRef(callback);
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        const isEnabled =
            typeof minDelay === "number" && typeof maxDelay === "number";
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = random(
                    minDelay as number,
                    maxDelay as number
                );
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);
    const cancel = useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};

export default useRandomInterval;
