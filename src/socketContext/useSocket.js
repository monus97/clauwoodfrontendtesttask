import { useContext } from "react";
import { SocketContext } from "./socketContext";

const useSocket = () => {
  return useContext(SocketContext);
};

export default useSocket;
