import React, { useState } from "react";
import ufabet from "../assets/ufabet.gif";
import jackpot from "../assets/jackpot.gif";

function Ad() {
  const [isActive, setIsActive] = useState(true);
  const cancelBox = {
    width: "40px",
    height: "40px",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "absolute",
    right: "0",
  };

  if (isActive == false) {
    return <></>;
  }
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-29%)",
        }}
      >
        <div>
          <div style={cancelBox} onClick={() => setIsActive(false)}>
            <span style={{ color: "white", fontSize: "24px" }}>&times;</span>
          </div>
        </div>
        <a
          href="https://ufabet.casino/"
          target="_blank"
          style={{ cursor: "help" }}
        >
          <img src={ufabet} alt="This is the picture" />
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-35%)",
        }}
      >
        <div>
          <div style={cancelBox}>
            <span style={{ color: "white", fontSize: "24px" }}>&times;</span>
          </div>
        </div>
        <a
          href="https://ufabet.casino/"
          target="_blank"
          style={{ cursor: "help" }}
        >
          <img src={jackpot} alt="This is the picture" />
        </a>
      </div>
    </div>
  );
}

export default Ad;
