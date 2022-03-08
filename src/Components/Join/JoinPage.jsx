import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import "./JoinPage.css";
const useStyles = makeStyles({
  joinBtn: {
    width: "42rem",
    backgroundColor: "crimson",
    fontSize: "2rem",
    margin: "2rem 0rem",
  },
});
function JoinPage(props) {
  const styles = useStyles();
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <Typography variant="h1">LetsChat</Typography>
        <TextField
          id="joinInput"
          placeholder="Enter Your Name"
          variant="outlined"
          value={props.user}
          onChange={(e) => {
            props.setUser(e.target.value);
          }}
        />
        <Link
          to="/chat"
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            document.getElementById("joinInput").value = "";
            if (props.user.length < 1) {
              e.preventDefault();
            }
          }}>
          <Button variant="contained" className={styles.joinBtn}>
            Join Chat
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default JoinPage;
