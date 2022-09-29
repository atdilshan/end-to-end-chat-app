import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <i className="fa fa-circle onlineIcon"></i>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/" title="Click here to leave from room">
        Leave <i className="fas fa-sign-out-alt"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
