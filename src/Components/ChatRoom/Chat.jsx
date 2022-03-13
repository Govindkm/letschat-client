import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocketContext from "../../Context/SocketContext/SocketContext";
import { createStyles, Paper, Theme, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import { MessageLeft, MessageRight } from "./Message";
import ScrollableFeed from "react-scrollable-feed";
import { v4 as uuidv4 } from "uuid";
const useStyle = makeStyles((theme) => {
  return createStyles({
    chatBody: {
      width: "100vw",
      height: "93vh",
      display: "flex",
    },
    messagesContainer: {
      width: "70vw",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    messages: {
      margin: "1rem 0",
      width: "80%",
      height: "90%",
      overflow: "auto",
      boxSizing: "boder-box",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    textInput: {
      width: "100%",
    },
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
  });
});
function Chat() {
  const { Socket, setSocket, Me, Messages, setMessages } =
    useContext(SocketContext);
  const [myMessage, setMyMessage] = useState("");
  const navigate = useNavigate();

  const MyMessageSubmitHandler = (e) => {
    e.preventDefault();
    let messageItem = {};
    messageItem.message = myMessage;
    setMyMessage("");
    messageItem.user = "me";
    messageItem.timestamp = Date.now();
    messageItem.id = uuidv4();
    setMessages((currentMessages) => {
      setMessages([...currentMessages, messageItem]);
      Socket.emit("message", messageItem.message);
    });
  };

  useEffect(() => {
    if (!Me) {
      navigate("/");
    } else {
      alert(`Welcome ${Me}.`);
    }
  }, []);

  const classes = useStyle();
  return (
    <div className={classes.chatBody}>
      {/* Message Box to show messages */}
      <Paper className={classes.messagesContainer}>
        <Paper className={classes.messages}>
          <ScrollableFeed>
            {Messages.map((Message) => {
              if (Message.user !== "me")
                return (
                  <MessageLeft
                    message={Message.message}
                    user={Message.user}
                    timestamp={Message.timestamp}
                    key={Message.id}></MessageLeft>
                );
              else {
                return (
                  <MessageRight
                    message={Message.message}
                    user={Message.user}
                    timestamp={Message.timestamp}
                    key={Message.id}></MessageRight>
                );
              }
            })}
          </ScrollableFeed>
        </Paper>

        {/* UserInput to input the messages */}
        <div className={classes.textInput}>
          <form
            className={classes.wrapForm}
            noValidate
            autoComplete="off"
            onSubmit={MyMessageSubmitHandler}>
            <TextField
              id="standard-text"
              label="Enter Message"
              className={classes.wrapText}
              value={myMessage}
              onChange={(e) => {
                setMyMessage(e.target.value);
              }}
              //margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}>
              <SendIcon />
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default Chat;
