import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";
import Chat from "./Components/Chatbox/Chat";

// import "./i18n";
// todo: Use react i18n internationalization for translations of different headers. https://react.i18next.com/latest/using-with-hooks

import {
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import UsersList from "./Components/ActiveUsers/UsersList";

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
  const [theme, toggleTheme] = useState(darkTheme);
  const toggleUI = () => {
    if (theme == darkTheme) {
      toggleTheme(lightTheme);
    } else {
      toggleTheme(darkTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" className="header-message">
            LetsChat
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={toggleUI} />}
              label={`Switch ${theme == darkTheme ? "Light" : "Dark"}`}
            />
          </FormGroup>
        </Grid>
        <Grid item md={3} xs={12}>
          <UsersList
            users={[
              { name: "Govind", id: "a", gender: "male" },
              { name: "Durgesh", id: "b", gender: "female" },
              { name: "Aryan", id: "c", gender: "male" },
              { name: "Govind", id: "d", gender: "male" },
              { name: "Durgesh", id: "e", gender: "female" },
              { name: "Aryan", id: "f", gender: "male" },
            ]}></UsersList>
        </Grid>
        <Grid item md={6} xs={12}>
          <Chat></Chat>
        </Grid>
        <Grid item md={3} xs={12}>
          <Chat></Chat>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
