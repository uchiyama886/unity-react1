import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstPage() {
    const navigate = useNavigate();
    const [toggleValue, setToggleValue] = useState(2);

    const handleToggleChange = (event) => {
        setToggleValue(event.target.value);
    };

    const navigateToGamePage1 = () => {
        navigate("gamePage1");
    };

    const navigateToGamePage2 = () => {
        navigate("gamePage2");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>ゲームのタイトル画面</h1>
            <div>
                <button onClick={navigateToGamePage1}>ゲームページ1へ</button>
                <button onClick={navigateToGamePage2}>ゲームページ2へ</button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <label htmlFor="toggle">数字を選択してください: </label>
                <select id="toggle" value={toggleValue} onChange={handleToggleChange}>
                    {[...Array(7).keys()].map((num) => (
                        <option key={num + 2} value={num + 2}>
                            {num + 2}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FirstPage;
