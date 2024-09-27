import React, { useState, useEffect, useRef } from "react";
import { usePlayer } from "./PlayerConfig";
import Unity, { UnityContext } from "react-unity-webgl";
import {
	ChakraProvider,
	Box,
	Heading,
	Button,
	Center,
	Text,
} from "@chakra-ui/react";

const unityContext = new UnityContext({
	loaderUrl: "Build/タイミングゲーム.loader.js",
	dataUrl: "Build/タイミングゲーム.data",
	frameworkUrl: "Build/タイミングゲーム.framework.js",
	codeUrl: "Build/タイミングゲーム.wasm",
});

function GamePage2({ id }) {
	const [fsEvent, setFsEvent] = useState(false);
	const [, , name] = usePlayer();
	const unityContainerRef = useRef(null);

	function Fullscreen() {
		const unityInstance = unityContext.unityInstance;
		if (!fsEvent) {
			unityInstance.SetFullscreen(1);
			setFsEvent(true);
		} else {
			unityInstance.SetFullscreen(0);
			setFsEvent(false);
		}
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "f" || event.key === "F") {
				Fullscreen();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		if (unityContainerRef.current) {
			unityContainerRef.current.focus();
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fsEvent]);

	return (
		<ChakraProvider>
			<Center flexDirection="column" mt="20px">
				<Text fontSize="xl" mb="10px">
					No.{id}
				</Text>
				<Heading as="h2" size="lg" mb="10px">
					{name[id - 1]}さん
				</Heading>
				<Button onClick={Fullscreen} mb="20px">
					{fsEvent ? "フルスクリーン解除" : "Fボタン:フルスクリーン"}
				</Button>
				<Box
					ref={unityContainerRef}
					tabIndex="0"
					border="2px solid black"
					bg="gray.200"
					p="10px"
				>
					<Unity
						unityContext={unityContext}
						style={{
							height: "60vh",
							width: 700,
						}}
					/>
				</Box>
			</Center>
		</ChakraProvider>
	);
}

export default GamePage2;
