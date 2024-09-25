import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/firstPage";
import { ChakraProvider } from "@chakra-ui/react";
import GameContainer1 from "./pages/GameContainer1";
import GameContainer2 from "./pages/GameContainer2";
import Tutorial from "./pages/tutorial";
import LastPage from "./pages/lastPage";
import { PlayerProvider } from "./pages/PlayerConfig";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ChakraProvider>
        <PlayerProvider>
          <Router>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/Page1" element={<GameContainer1 />} />
              <Route path="/Page2" element={<GameContainer2 />} />
              <Route path="/Tutorial" element={<Tutorial />} />
              <Route path="/LastPage" element={<LastPage />} />
            </Routes>
          </Router>
        </PlayerProvider>
      </ChakraProvider>
    </ErrorBoundary >
  );
}

export default App;
