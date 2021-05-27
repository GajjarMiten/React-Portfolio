import React, { createContext, useContext, useEffect, useState } from "react";

const initializeSetting = (
    localStorageKey: string,
    setValue: any,
    value: any,
    fallbackValue: any
) => {
    if (typeof value !== "undefined") return;

    const userValue = localStorage.getItem(localStorageKey);
    if (userValue !== null) {
        let newValue;
        try {
            newValue = JSON.parse(userValue);
        } catch (_) {
            newValue = userValue;
        }

        setValue(newValue);
    } else {
        setValue(fallbackValue);
    }
};

const SettingsContext = createContext<{ value: any; setValue: any }>({
    value: false,
    setValue: () => {},
});

const SettingsProvider: React.FC = ({ children }) => {
    const [sound, setSound] = useState(false);

    useEffect(() => {
        initializeSetting("mi-10:false", setSound, sound, true);
    }, [sound]);

    return (
        <SettingsContext.Provider value={{ value: sound, setValue: setSound }}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;

export const useSettings = () => {
    const { value, setValue } = useContext(SettingsContext);

    const toggleSound = () => {
        const newValue = !value;
        localStorage.setItem("mi-10", newValue.toString());
        setValue(newValue);
    };

    return { value, toggleSound };
};
