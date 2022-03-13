import React, { useEffect, useState } from "react";
import SocketContext from "./SocketContext";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

function SocketState(props) {
  const [Socket, setSocket] = useState(
    io("https://letschat-scoketio.herokuapp.com/", {
      transports: ["websocket"],
    })
  );
  const [Me, setMe] = useState(props.user);
  const [Users, setUsers] = useState([]);
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    Socket.emit("new-user-joined", Me);

    Socket.on("user-joined", (data) => {
      console.log("New User Joined ", data);
      setUsers([...Users, data]);
    });

    Socket.on("recieve", (data) => {
      console.log("Received a new message ", data);
      data.id = uuidv4();
      data.timestamp = Date.now();
      setMessages((currentMessages) => {
        let copy = _.cloneDeep(currentMessages);
        copy.push(data);
        console.log("Messages : ", copy);
        setMessages(copy);
      });
    });

    Socket.on("Disconnected", (data) => {
      console.log("User Disconnected", data);
      setUsers((currentUsers) => {
        const copy = _.cloneDeep(currentUsers);
        setUsers(
          copy.filter((user) => {
            return user.id !== data.id;
          })
        );
      });
    });
  }, []);
  return (
    <>
      <SocketContext.Provider
        value={{ Socket, setSocket, Me, Messages, setMessages }}>
        {props.children}
      </SocketContext.Provider>
    </>
  );
}

export default SocketState;
