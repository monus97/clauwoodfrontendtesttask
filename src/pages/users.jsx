import React from "react";
import Bedroom from "../components/bedRoom";
import Kitchen from "../components/kitchen";

const User = () => (
  <div>
    <h1>User</h1>
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        justifyContent: "center",
      }}
    >
      <Bedroom />
      <Kitchen />
    </div>
  </div>
);

export default User;
