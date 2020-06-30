import React from "react";
import { Router } from "@reach/router";

import CV from "./CV";
import Home from "./Home";
import Jeu from "./Jeu";
import Messages from "./Messages";
import Navbar from "./Navbar";

const NotFound = () => <div>Sorry, cette page n'existe pas.</div>;

function App() {
  return (
    <div>
      <Navbar />
      {/* les routes de mes pages */}
      <Router>
        <Home path="/" />
        <CV path="cv" />
        <Jeu path="jeu" />
        <Messages path="messages" />

        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
