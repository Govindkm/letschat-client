import React, { useContext } from "react";
import SocketContext from "../../Context/SocketContext/SocketContext";
function Chat() {
  const { Socket, setSocket, Me } = useContext(SocketContext);
  return <div>{Me}</div>;
}

export default Chat;
