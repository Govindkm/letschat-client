import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function Navbar(props) {
  const [mode, setMode] = React.useState(false);

  const handleChange = (event) => {
    setMode(event.target.checked);
    props.toggler();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LetsChat
          </Typography>
          {
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={mode}
                      onChange={handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={mode ? "dark" : "light"}
                />
              </FormGroup>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
