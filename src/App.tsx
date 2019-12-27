import React, { useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import "./app.css";
import Header from "components/Header";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showHamburgetMenu, setShowHamburgermenu] = useState(false);
  return (
    <Root>
      <Header showContactModal={showContactModal} setShowContactModal={setShowContactModal} showHamburgerMenu={showHamburgetMenu} setShowHamburgerMenu={setShowHamburgermenu} />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
