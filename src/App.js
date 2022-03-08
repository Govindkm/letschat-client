import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";

// import "./i18n";
// todo: Use react i18n internationalization for translations of different headers. https://react.i18next.com/latest/using-with-hooks

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import JoinPage from "./Components/Join/JoinPage";
import Navbar from "./Components/Navbar/Navbar";
import Chat from "./Components/ChatRoom/Chat";
import SocketState from "./Context/SocketContext/SocketState";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [theme, toggleTheme] = useState(lightTheme);
  const [currentUser, setCurrentUser] = useState("");
  const toggleUI = () => {
    if (theme === darkTheme) {
      toggleTheme(lightTheme);
    } else {
      toggleTheme(darkTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="nav">
        <Navbar toggler={toggleUI}></Navbar>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={<JoinPage user={currentUser} setUser={setCurrentUser} />}
        />
        <Route
          exact
          path="/chat"
          element={
            <SocketState user={currentUser}>
              <Chat />
            </SocketState>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
