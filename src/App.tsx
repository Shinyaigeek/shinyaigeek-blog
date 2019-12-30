import React, { useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import "./app.css";
import Header from "components/Header";
import Footer from "components/Footer";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  
  return (
    <Root>
      <Header showContactModal={showContactModal} setShowContactModal={() => setShowContactModal(!showContactModal)} showHamburgerMenu={showHamburgerMenu} setShowHamburgerMenu={() => setShowHamburgerMenu(!showHamburgerMenu)} />
      <div style={{
        position: "relative",
        top: "72px"
      }}>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  );
}

export default App;
