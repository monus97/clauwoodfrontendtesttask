import React, { createContext, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { bothOn, toggleLight } from "../redux/actions/userActions";

const SocketContext = createContext(null);

export { SocketContext };

const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  const socket = io("http://localhost:8080");

  useEffect(() => {
    socket.on("message", (message) => {
      if (message.type === "TOGGLE_LIGHT") {
        dispatch(toggleLight(message.room, message.light));
      } else if (message.type === "BOTH_ON") {
        dispatch(bothOn(message.room));
      }
    });
  }, [dispatch]);

  const sendMessage = (message) => {
    socket.emit("message", message);
  };

  return (
    <SocketContext.Provider value={sendMessage}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
