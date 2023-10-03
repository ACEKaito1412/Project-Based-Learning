import React from "react";
import profile from "../assets/profile-2.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <img className="profile--img" src={profile} alt="profile" />
      <h3>Jhun Carlo Macdon</h3>
      <h4>Junior Software Developer</h4>
      <p>acekaito1412.rf.gd</p>
    </div>
  );
}
