import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "/public/Build/fuusenn.loader.js",
    dataUrl: "/public/Build/fuusenn.data.unityweb",
    frameworkUrl: "/public/Build/fuusenn.framework.js.unityweb",
    codeUrl: "/public/Build/fuusenn.wasm.unityweb",
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
