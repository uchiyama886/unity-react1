import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage2 from "./gamePage2";
import { useNavigate } from "react-router-dom";

function GameContainer2() {
    const [currentGameId, setCurrentGameId] = useState(0);
    const [showGamePage, setShowGamePage] = useState(false);
    const [playerNum] = usePlayer();
    const navigate = useNavigate();


    function showNewGameInstance() {
        setCurrentGameId(currentGameId + 1);
        setShowGamePage(true);
    }

    function navigateToLastPage() {
        navigate("/LastPage");
    }

    return (
        <div>
            <center>
                {currentGameId !== playerNum ? (
                    <button onClick={showNewGameInstance}>ゲーム開始!</button>
                ) : (
                    <button onClick={navigateToLastPage}>次へ</button>
                )}
                {showGamePage && <GamePage2 key={currentGameId} id={currentGameId} />}
            </center>
        </div >
    );
}
export default GameContainer2;
