import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SocketContext from "../../Context/SocketContext/SocketContext";
function Chat() {
  const { Socket, setSocket, Me } = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Me) {
      navigate("/");
    }
  }, []);
  return <div>{Me}</div>;
}

export default Chat;
