import React, { Fragment, useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/timinggame.loader.js",
    dataUrl: "Build/timinggame.data",
    frameworkUrl: "Build/timinggame.framework.js",
    codeUrl: "Build/timinggame.wasm",
});

function GamePage2() {
    const [fsEvent, setFsEvent] = useState(false);

    function Fullscreen() {
        const unityInstance = unityContext.unityInstance;
        if (!fsEvent) {
            unityInstance.SetFullscreen(1);
            setFsEvent(true);
        }
        else {
            unityInstance.SetFullscreen(0);
            setFsEvent(false);
        }
    }

    window.addEventListener("keydown", function (event) {
        if (event.key === "f") {
            Fullscreen(fsEvent);
        }
    });

    return (
        <div>
            <Fragment>
                <Unity unityContext={unityContext} style={{
                    height: "100%",
                    width: 400,
                    border: "2px solid black",
                    background: "grey",
                }} />

            </Fragment>
        </div>
    );
}

export default GamePage2;
