import React, { useState } from "react";
import { connect } from "react-redux";
import {
  DesktopLinksGroup,
  NavElement,
  // AuthButton,
  Title,
  Nav,
  Hamburger,
  MobileLinksGroup,
  CloseNavBtn,
  NavMobileElement,
} from "./navigation-elements";
import { Link } from "react-router-dom";
import { Icon } from "../../UI/theme";
import { signOut } from "../../firebase/firebaseAuth";

function DesktopNav({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <DesktopLinksGroup>
        <NavElement>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/notes">
            Notes
          </Link>
        </NavElement>
        <NavElement>
          <Link
            onClick={signOut}
            style={{ textDecoration: "none", color: "#fff" }}
            to="/"
          >
            Log out
          </Link>
        </NavElement>
      </DesktopLinksGroup>
    );
  } else {
    return (
      <DesktopLinksGroup>
        <NavElement>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Home
          </Link>
        </NavElement>
      </DesktopLinksGroup>
    );
  }
}
function MobileNav({ isLoggedIn }) {
  const [isMobileNavOpen, toggleMobileNav] = useState(false);
  if (isLoggedIn) {
    return (
      <>
        <Hamburger onClick={() => toggleMobileNav(!isMobileNavOpen)}>
          <Icon className="fas fa-bars fa-2x" />
        </Hamburger>
        <MobileLinksGroup isOpen={isMobileNavOpen}>
          <NavMobileElement>
            <Link
              onClick={() => toggleMobileNav(!isMobileNavOpen)}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/notes"
            >
              <Icon className="far fa-clipboard" /> Notes
            </Link>
          </NavMobileElement>
          <NavMobileElement>
            <Link
              onClick={() => {
                signOut();
                toggleMobileNav(!isMobileNavOpen);
              }}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/"
            >
              <Icon className="fas fa-sign-out-alt" /> Log out
            </Link>
          </NavMobileElement>
          <CloseNavBtn onClick={() => toggleMobileNav(!isMobileNavOpen)}>
            <Icon className="fas fa-times" /> Close
          </CloseNavBtn>
        </MobileLinksGroup>
      </>
    );
  } else {
    return (
      <>
        <Hamburger onClick={() => toggleMobileNav(!isMobileNavOpen)}>
          <Icon className="fas fa-bars fa-2x" />
        </Hamburger>
        <MobileLinksGroup isOpen={isMobileNavOpen}>
          <NavMobileElement>
            <Link
              onClick={() => toggleMobileNav(!isMobileNavOpen)}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/"
            >
              <Icon className="fas fa-home" />
              Home
            </Link>
          </NavMobileElement>
          <CloseNavBtn onClick={() => toggleMobileNav(!isMobileNavOpen)}>
            <Icon className="fas fa-times" />
            Close
          </CloseNavBtn>
        </MobileLinksGroup>
      </>
    );
  }
}

function Navigation({ isLoggedIn }) {
  return (
    <Nav>
      <Title>Keep</Title>
      {window.innerWidth <= 720 ? (
        <MobileNav isLoggedIn={isLoggedIn} />
      ) : (
        <DesktopNav isLoggedIn={isLoggedIn} />
      )}
    </Nav>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps, {})(Navigation);
