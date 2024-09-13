import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [playerNum, setPlayerNum] = useState(2);
    const [name, setName] = useState("");

    return (
        <PlayerContext.Provider value={[playerNum, setPlayerNum, name, setName]}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
