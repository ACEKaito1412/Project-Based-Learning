import React from "react";
import icon_github from "../assets/github.png";
import icon_twitter from "../assets/twitter.png";
import icon_instagram from "../assets/instagram.png";
import icon_facebook from "../assets/facebook.png";

export default function Social() {
  return (
    <div className="social">
      <ul className="social--list">
        <li>
          <img src={icon_facebook} alt="" />
        </li>
        <li>
          <img src={icon_instagram} alt="" />
        </li>
        <li>
          <img src={icon_twitter} alt="" />
        </li>
        <li>
          <img src={icon_github} alt="" />
        </li>
      </ul>
    </div>
  );
}
