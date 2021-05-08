import React from "react";
import myhealthtrackerlogo from "./myhealthtrackerlogo.svg";
import downarrow from "./downarrow.svg";
import defaultprofilepic from "./defaultprofilepic.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    height: 82px;
  }

  .logo {
    width: 210px;
  }

  .profilepic {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-left: 1950px;
    margin-top: 20px;
  }

  .navLinks {
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: center;
  }

  .downarrow {
    margin-left: 10px;
  }

  .main {
    background-color: white;
  }
`;

function Header() {
  return (
    <Container>
      <div className="main">
        <nav>
          <img className="logo" src={myhealthtrackerlogo} alt="" />
          <div className="navLinks">
            <Link style={{ textDecoration: "none", color: "#1B212C" }} to="/">
              Sleep
            </Link>
            <img className="downarrow" src={downarrow} alt="" />
          </div>

          <div className="navLinks">
            <Link style={{ textDecoration: "none", color: "#1B212C" }} to="/">
              Nutrition
            </Link>{" "}
            <img className="downarrow" src={downarrow} alt="" />
          </div>

          <div className="navLinks">
            <Link style={{ textDecoration: "none", color: "#1B212C" }} to="/">
              Training
            </Link>
            <img className="downarrow" src={downarrow} alt="" />
          </div>

          <img className="profilepic" src={defaultprofilepic} alt="" />
        </nav>
      </div>
    </Container>
  );
}

export default Header;
