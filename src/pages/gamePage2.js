import React, { Fragment, useState, useEffect } from "react";
import { usePlayer } from "./PlayerConfig";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/timinggame.loader.js",
    dataUrl: "Build/timinggame.data",
    frameworkUrl: "Build/timinggame.framework.js",
    codeUrl: "Build/timinggame.wasm",
});

function GamePage2({ id }) {
    const [fsEvent, setFsEvent] = useState(false);
    const [playerNum, , name] = usePlayer(); // usePlayerフックの使用

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
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [fsEvent]);

    return (
        <div>
            <h2>Current Game ID: {id}</h2>
            <h3>Player Name: {name[id - 1]}</h3>
            <button onClick={Fullscreen}> {fsEvent ? "Exit FullScreen" : "Enter FullScreen"} </button>
            <Fragment>
                <Unity unityContext={unityContext} style={{
                    height: "100%",
                    width: 500,
                    border: "2px solid black",
                    background: "grey",
                }} />
            </Fragment>
        </div>
    );
}

export default GamePage2;
