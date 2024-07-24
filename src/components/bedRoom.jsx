import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Light from "./light";
import MyButton from "./common/myButton";
import { bothOn, toggleLight } from "../redux/actions/userActions";
import useSocket from "../socketContext/useSocket";
import bedroomimg from "../assets/images/bedroom.jpeg";
import { Card, CardContent } from "@mui/material";
const Bedroom = () => {
  const lights = useSelector((state) => state.bedroom);
  const dispatch = useDispatch();
  const sendMessage = useSocket();

  const handleToggle = (light) => {
    dispatch(toggleLight("bedroom", light));
    sendMessage({ type: "TOGGLE_LIGHT", room: "bedroom", light });
  };

  const handleBothOn = () => {
    dispatch(bothOn("bedroom"));
    sendMessage({ type: "BOTH_ON", room: "bedroom" });
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 295,
          backgroundImage: `url(${bedroomimg})`,
          backgroundSize: "cover",
        }}
      >
        <CardContent>
          <div className="bedroom">
            <h2>Bedroom</h2>
            <Light
              room="bedroom"
              light="light1"
              isOn={lights.light1}
              toggle={() => handleToggle("light1")}
            />
            <Light
              room="bedroom"
              light="light2"
              isOn={lights.light2}
              toggle={() => handleToggle("light2")}
            />
            <div className="buttons">
              <MyButton onClick={handleBothOn}>Both On</MyButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Bedroom;
