import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/timinggame.loader.js",
    dataUrl: "Build/timinggame.data",
    frameworkUrl: "Build/timinggame.framework.js",
    codeUrl: "Build/timinggame.wasm",
});
function GamePage2() {
    return (
        <div>
            <Unity unityContext={unityContext} style={{
                height: "100%",
                width: 400,
                border: "2px solid black",
                background: "grey",
            }} />
        </div>
    );
}

export default GamePage2;
