import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [playerNum, setPlayerNum] = useState(2);
    const [names, setNames] = useState(Array(2).fill(""));

    const updateNames = (num) => {
        setNames((prevNames) => {
            const newNames = [...prevNames];
            if (num > newNames.length) {
                for (let i = newNames.length; i < num; i++) {
                    newNames.push("");
                }
            } else {
                newNames.length = num;
            }
            return newNames;
        });
    };

    const updatePlayerNum = (num) => {
        setPlayerNum(num);
        updateNames(num);
    };

    return (
        <PlayerContext.Provider value={[playerNum, updatePlayerNum, names, setNames]}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
