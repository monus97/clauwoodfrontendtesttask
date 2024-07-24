import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bothOn, toggleLight } from "../redux/actions/userActions";
import Light from "./light";
import MyButton from "./common/myButton";
import useSocket from "../socketContext/useSocket";
import kitchenimg from "../assets/images/kitchen.jpeg";
import { Card, CardContent } from "@mui/material";
const Kitchen = () => {
  const lights = useSelector((state) => state.kitchen);
  const dispatch = useDispatch();
  const sendMessage = useSocket();

  const handleToggle = (light) => {
    dispatch(toggleLight("kitchen", light));
    sendMessage({ type: "TOGGLE_LIGHT", room: "kitchen", light });
  };

  const handleBothOn = () => {
    dispatch(bothOn("kitchen"));
    sendMessage({ type: "BOTH_ON", room: "kitchen" });
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundImage: `url(${kitchenimg})`,
        backgroundSize: "cover",
      }}
    >
      <CardContent>
        <div className="bedroom">
          <h2>Kitchen</h2>
          <Light
            room="kitchen"
            light="light1"
            isOn={lights.light1}
            toggle={() => handleToggle("light1")}
          />
          <Light
            room="kitchen"
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
  );
};

export default Kitchen;
