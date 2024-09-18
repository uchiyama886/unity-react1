import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [playerNum, setPlayerNum] = useState(2);
    const [name, setName] = useState(Array(2).fill(""));

    const updateNames = (num) => {
        setName((prevNames) => {
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

    return (
        <PlayerContext.Provider value={[playerNum, setPlayerNum, name, setName, updateNames]}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
