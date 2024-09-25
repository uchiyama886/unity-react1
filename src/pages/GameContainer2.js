import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage2 from "./gamePage2";

function GameContainer2() {
    const [currentGameId, setCurrentGameId] = useState(0);
    const [showGamePage, setShowGamePage] = useState(false);
    const [playerNum] = usePlayer(); // usePlayerフックの使用


    function showNewGameInstance() {
        setCurrentGameId(currentGameId + 1);
        setShowGamePage(true);
    }

    return (
        <div>
            <center>
                {currentGameId !== playerNum ? (
                    <button onClick={showNewGameInstance}>Load GamePage2</button>
                ) : (
                    <button onClick={() => alert("Player number matches current game ID!")}>Player Number Matched</button>
                )}
                {showGamePage && <GamePage2 key={currentGameId} id={currentGameId} />}
            </center>
        </div>
    );
}
export default GameContainer2;
