import React, { useState } from "react";
import { usePlayer } from "./PlayerConfig";
import GamePage1 from "./gamePage1";
import { useNavigate } from "react-router-dom";
import {
    ChakraProvider,
    Box,
    Button,
    Center,
    Text
} from "@chakra-ui/react";

function GameContainer2() {
    const [currentGameId, setCurrentGameId] = useState(0);
    const [showGamePage, setShowGamePage] = useState(false);
    const [playerNum] = usePlayer();
    const navigate = useNavigate();

    function showNewGameInstance(e) {
        if (e) e.target.blur(); // ボタンからフォーカスを外す
        setCurrentGameId(currentGameId + 1);
        setShowGamePage(true);
    }

    function navigateToLastPage(e) {
        if (e) e.target.blur(); // ボタンからフォーカスを外す
        navigate("/LastPage");
    }

    return (
        <ChakraProvider>
            <Center flexDirection="column" mt="20px">
                {currentGameId !== playerNum ? (
                    <Button onClick={(e) => showNewGameInstance(e)} mb="20px">
                        ゲーム開始
                    </Button>
                ) : (
                    <Button onClick={(e) => navigateToLastPage(e)} mb="20px">
                        次へ
                    </Button>
                )}
                {showGamePage && (
                    <GamePage1 key={currentGameId} id={currentGameId} />
                )}
                {currentGameId === 0 ? (
                    <Box width={500} textAlign="center">
                        <Text fontSize="xl">・ひとりずつあそんでください</Text>
                        <Text fontSize="xl">・カードのかずが大きい人ほどがんばってください。</Text>
                        <Text fontSize="xl">・カードのかずが小さい人はがんばらないでください。</Text>
                        <Text fontSize="xl">・みんなできたら次へ行ってください</Text>
                        <Text fontSize="xl" mt="20px">・人数と名前を入力したら、好きな方のゲームに行ってね。</Text>
                    </Box>
                ) : (
                    <Box />
                )}
            </Center>
        </ChakraProvider>
    );
}
export default GameContainer2;
