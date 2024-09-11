import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/firstPage";
import GamePage1 from "./pages/gamePage1";
import GamePage2 from "./pages/gamePage2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/gamePage1" element={<GamePage1 />} />
        <Route path="/gamePage2" element={<GamePage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
