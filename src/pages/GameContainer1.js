import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage1 from "./gamePage1";
import shot from "../images/shot.png";

function GameContainer1() {
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
                    <button onClick={showNewGameInstance}>ゲーム開始!</button>
                ) : (
                    <button onClick={() => alert("Player number matches current game ID!")}>次へ</button>
                )}
                {showGamePage && <GamePage1 key={currentGameId} id={currentGameId} />}
                {currentGameId === 0 ? <img src={shot} width={500} alt="" /> : <div />}
            </center>
        </div>
    );
}
export default GameContainer1;
