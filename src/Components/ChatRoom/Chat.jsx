import React, { useContext } from "react";
import SocketContext from "../../Context/SocketContext/SocketContext";
function Chat() {
  const { Socket, setSocket } = useContext(SocketContext);
  return <div>Chat</div>;
}

export default Chat;
