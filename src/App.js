import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/firstPage";
import GamePage1 from "./pages/gamePage1";
import GamePage2 from "./pages/gamePage2";
import GamePage3 from "./pages/gamePage3";
import { ChakraProvider } from "@chakra-ui/react";


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
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/gamePage1" element={<GamePage1 />} />
            <Route path="/gamePage2" element={<GamePage2 />} />
            <Route path="/gamePage3" element={<GamePage3 />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
