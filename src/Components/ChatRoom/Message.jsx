import React from "react";
import { createStyles, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ReactTimeAgo from "react-time-ago";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageRow: {
      display: "flex",
      width: "100%",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      backgroundColor: "#A8DDFD",
      width: "100%",
      padding: "2rem",
      textAlign: "left",
      color: "black",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      color: "black",
      backgroundColor: "#f8e896",
      maxWidth: "60%",
      padding: "2rem",
      //height: "50px",
      textAlign: "left",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px",
      },
    },

    messageContent: {
      padding: 0,
      margin: 0,
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "10px",
      bottom: "3px",
      right: "5px",
    },

    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    displayName: {
      marginLeft: "20px",
    },
  })
);
export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : Date.now();
  const displayName = props.user
    ? props.user.split("_")[0].toUpperCase()
    : "LeftMessage";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar alt={displayName} className={classes.orange}></Avatar>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>
              {<ReactTimeAgo date={props.timestamp} locale="en-IN" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp
    ? new Date(props.timestamp).toLocaleTimeString()
    : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>
          {<ReactTimeAgo date={props.timestamp} locale="en-IN" />}
        </div>
      </div>
    </div>
  );
};
