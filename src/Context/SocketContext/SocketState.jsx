import React, { useEffect, useState } from "react";
import SocketContext from "./SocketContext";
import io from "socket.io-client";
import _ from "lodash";

function SocketState(props) {
  const [Socket, setSocket] = useState(
    io("https://letschat-scoketio.herokuapp.com/", {
      transports: ["websocket"],
    })
  );
  const [Users, setUsers] = useState([]);
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    Socket.on("connection", (data) => {
      console.log("Connected ", data);
    });

    Socket.on("user-joined", (data) => {
      console.log("New User Joined ", data);
      setUsers([...Users, data]);
    });

    Socket.on("recieve", (data) => {
      console.log("Received a new message ", data);
      setMessages((currentMessages) => {
        let copy = _.cloneDeep(Messages);
        copy.push(data);
        console.log("Messages : ", copy);
        return copy;
      });
    });

    Socket.on("Disconnected", (data) => {
      console.log("User Disconnected", data);
      setUsers((currentUsers) => {
        const copy = _.cloneDeep(currentUsers);
        setUsers(
          copy.filter((user) => {
            return user.id != data.id;
          })
        );
      });
    });
  }, []);
  return (
    <>
      <SocketContext.Provider value={{ Socket, setSocket }}>
        {props.children}
      </SocketContext.Provider>
    </>
  );
}

export default SocketState;
