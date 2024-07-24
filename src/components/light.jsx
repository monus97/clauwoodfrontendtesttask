import React from "react";
import MyButton from "./common/myButton";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Light = ({ light, isOn, toggle }) => (
  <div style={{ background: isOn && "#e7dddd" }}>
    <h3>{light}</h3>
    <p>
      {isOn ? (
        <LightbulbIcon style={{ color: "#ff9f00", fontSize: "50px" }} />
      ) : (
        <LightbulbOutlinedIcon style={{ fontSize: "50px" }} />
      )}
    </p>
    <MyButton onClick={toggle}>{light}</MyButton>
  </div>
);

export default Light;
