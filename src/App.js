import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Definition } from "./Pages";
import { useState } from "react";
import { Footer, Navbar } from "./Components";
import About from "./Pages/About";
import { AnimatePresence } from "framer-motion";

const Global = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    background-color: ${(props) => (props.darkMode ? "#121212" : "white")};
    transition: 200ms;
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
  }
`;

const Application = styled.div`
  padding: 0;
  margin: 0;
`;

const transVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", duration: 0.5 },
  },
  exit: {
    opacity: 0,
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = {
    colors: {
      primary: "#8830AB",
      secondary: "#00AEA0",
      faint: "#8F8F8F",
      text: "black",
      border: "#cccccc",
    },
  };

  const darkTheme = {
    colors: {
      primary: "#a64bc9",
      secondary: "#089186",
      faint: "#8F8F8F",
      text: "#bfbfbf",
      border: "#303030",
    },
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <Global darkMode={darkMode} />
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Application darkMode={darkMode}>
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

            <AnimatePresence>
              <Routes key="routes">
                <Route
                  path="/"
                  element={<Landing transVariant={transVariant} />}
                />
                <Route
                  path="/about"
                  element={<About transVariant={transVariant} />}
                />
                <Route
                  path="/search/:word"
                  element={<Definition transVariant={transVariant} />}
                />
              </Routes>
            </AnimatePresence>

            <Footer />
          </Application>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
