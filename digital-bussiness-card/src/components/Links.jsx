import React from "react";
import mail from "../assets/Mail.jpg";
import linked from "../assets/linkedin.png";

export default function Links() {
  return (
    <div className="links">
      <button className="links--email">
        <img src={mail} alt="" />
        Email
      </button>
      <button className="links--linkedIn">
        <img src={linked} alt="" />
        LinkedIn
      </button>
    </div>
  );
}
