import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/fuusenn.loader.js",
    dataUrl: "Build/fuusenn.data",
    frameworkUrl: "Build/fuusenn.framework.js",
    codeUrl: "Build/fuusenn.wasm",
});
function GamePage1() {
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

export default GamePage1;
