import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage1 from "./gamePage1";
import shot from "../images/shot.png";
import { useNavigate } from "react-router-dom";
import {
    ChakraProvider,
    Box,
    Button,
    Center,
    Image
} from "@chakra-ui/react";

function GameContainer1() {
    const [currentGameId, setCurrentGameId] = useState(0);
    const [showGamePage, setShowGamePage] = useState(false);
    const [playerNum] = usePlayer(); // usePlayerフックの使用
    const navigate = useNavigate();

    function showNewGameInstance() {
        setCurrentGameId(currentGameId + 1);
        setShowGamePage(true);
    }

    function navigateToLastPage() {
        navigate("/LastPage");
    };

    return (
        <ChakraProvider>
            <Center flexDirection="column" mt="20px">
                {currentGameId !== playerNum ? (
                    <Button onClick={showNewGameInstance} mb="20px">ゲーム開始</Button>
                ) : (
                    <Button onClick={navigateToLastPage} mb="20px">次へ</Button>
                )}
                {showGamePage && <GamePage1 key={currentGameId} id={currentGameId} />}
                {currentGameId === 0 ? <Image src={shot} width={500} alt="" /> : <Box />}
            </Center>
        </ChakraProvider>
    );
}

export default GameContainer1;
