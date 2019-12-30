import React, { useState } from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import "./app.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Profile from "./pages/profile";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <Root>
      <Header
        showContactModal={showContactModal}
        setShowContactModal={() => setShowContactModal(!showContactModal)}
        showHamburgerMenu={showHamburgerMenu}
        setShowHamburgerMenu={() => setShowHamburgerMenu(!showHamburgerMenu)}
      />
      <div
        style={{
          position: "relative",
          top: "72px"
        }}
      >
        <React.Suspense fallback={() => <div>loading</div>}>
          <Router>
            <Routes
              path="profile"
              render={() => {
                return (
                  <Profile
                    setShowContactModal={() =>
                      setShowContactModal(!showContactModal)
                    }
                  />
                );
              }}
            />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  );
}

export default App;
