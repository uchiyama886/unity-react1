import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage2 from "./gamePage2";

function GameContainer2() {
    const [currentGameId, setCurrentGameId] = useState(0);
    const [showGamePage, setShowGamePage] = useState(false);
    const [playerNum] = usePlayer();


    function showNewGameInstance() {
        setCurrentGameId(currentGameId + 1);
        setShowGamePage(true);
    }

    return (
        <div>
            <center>
                {currentGameId !== playerNum ? (
                    <button onClick={showNewGameInstance}>ゲーム開始!</button>
                ) : (
                    <button onClick={() => alert("Player number matches current game ID!")}>次へ</button>
                )}
                {showGamePage && <GamePage2 key={currentGameId} id={currentGameId} />}
            </center>
        </div>
    );
}
export default GameContainer2;
