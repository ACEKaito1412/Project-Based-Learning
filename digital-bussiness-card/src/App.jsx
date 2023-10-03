import { useState } from "react";

// icons

import "./App.css";
import Profile from "./components/Profile";
import Links from "./components/Links";
import Body from "./components/Body";
import Social from "./components/Social";

function App() {
  return (
    <div className="container">
      <Profile />
      <Links />
      <Body />
      <Social />
    </div>
  );
}

export default App;
