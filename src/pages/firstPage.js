import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ChakraProvider,
    Box,
    Heading,
    Button,
    Select,
    Center,
    Input,
    Text
} from "@chakra-ui/react";
import { usePlayer } from "./PlayerConfig";
import ReactPlayer from "react-player";

function FirstPage() {
    const navigate = useNavigate();
    const [playerNum, updatePlayerNum, names, setName] = usePlayer();

    const handleToggleChange = (event) => {
        const num = parseInt(event.target.value, 10);
        updatePlayerNum(num);
    };

    const handleNameChange = (index) => (event) => {
        const newNames = [...names];
        newNames[index] = event.target.value;
        setName(newNames);
    };

    const navigateToGamePage1 = () => {
        navigate("Page1");
    };

    const navigateToGamePage2 = () => {
        navigate("Page2");
    };

    const navigateToTutorial = () => {
        navigate("Tutorial");
    }

    return (
        <ChakraProvider>
            <Center mt="50px" flexDirection="column">
                <Heading mb="20px">ひとりひとりに与えられた数字の大きさをゲームのうまさで表して、協力して数字順に並べられたら全員優勝するゲーム</Heading>
                <Box mb="20px">
                    <Button colorScheme="blue" onClick={navigateToGamePage1} mr="4">
                        ゲームページ1へ
                    </Button>
                    <Button colorScheme="green" onClick={navigateToGamePage2}>
                        ゲームページ2へ
                    </Button>
                    <br /><br />
                    <center>
                        <Button colorScheme="yellow" onClick={navigateToTutorial}>
                            ゲームチュートリアルへ
                        </Button>
                    </center>
                </Box>
                <Box>
                    <label htmlFor="toggle">参加人数: </label>
                    <Select
                        id="toggle"
                        value={playerNum}
                        onChange={handleToggleChange}
                        width="auto"
                        display="inline-block"
                        ml="2"
                    >
                        {[...Array(7).keys()].map((num) => (
                            <option key={num + 2} value={num + 2}>
                                {num + 2}
                            </option>
                        ))}
                    </Select>
                </Box>
                <br></br>
                {Array.isArray(names) && names.map((name, index) => (
                    <Box key={index} mb="10px">
                        <label htmlFor={`name-${index}`}>No.{index + 1}の名前: </label>
                        <Input
                            id={`name-${index}`}
                            value={name}
                            onChange={handleNameChange(index)}
                            width="auto"
                            display="inline-block"
                            ml="2"
                        />
                    </Box>
                ))}
                <ReactPlayer
                    url="../ sounds / Shall_we_meet？.mp3"
                    playing={true}
                    loop={true}
                    volume={0.2}
                />
                <Text position="absolute" bottom="10px" right="10px" fontSize="sm" color="gray.500">
                    BGM: Shall we meet?
                </Text>
            </Center>
        </ChakraProvider>
    );
}

export default FirstPage;
