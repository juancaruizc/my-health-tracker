import React, { useState } from "react";
import myhealthtrackerlogo from "./myhealthtrackerlogo.svg";
import downarrow from "./downArrow.svg";
import defaultprofilepic from "./profilepic.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SleepModal from "./NavModals/SleepModal";
import NutritionModal from "./NavModals/NutritionModal";
import TrainingModal from "./NavModals/TrainingModal";

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
    border-radius: 12px;
    margin-left: 1900px;
    margin-top: 20px;
  }

  .navLinks {
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: center;
    margin-top: 7px;
  }

  .downarrow {
    margin-left: 10px;
    color: white;
  }

  .main {
    background-color: #15171b;
    height: 82px;
  }
  .navModal {
    display: flex;
    flex-direction: column;
    width: 200px;
    /* height: 30px; */
  }

  .link {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  .modal {
    height: 50px;
    background-color: red;
    border-radius: 4px;
  }
`;
const Header: React.FC = () => {
  // const [sleepModal, setSleepModal] = useState(false);
  // const [nutritionModal, setNutritionModal] = useState(false);
  // const [trainingModal, setTrainingModal] = useState(false);
  // const nav = document.querySelector(".navLinks");

  // function openModal() {
  //   setSleepModal(true);
  // }
  // function closeModal() {
  //   setSleepModal(false);
  // }
  return (
    <Container>
      <div className="main">
        <nav>
          <img className="logo" src={myhealthtrackerlogo} alt="" />
          <div
            className="navLinks"
            // onMouseOver={openModal}
            // onMouseLeave={closeModal}
          >
            <div className="link">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Sleep
              </Link>
              <img className="downarrow" src={downarrow} alt="" />
            </div>
            {/* <div className="modal">
              <SleepModal />
            </div> */}
          </div>

          <div className="navLinks">
            <div className="link">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Nutrition
              </Link>{" "}
              <img className="downarrow" src={downarrow} alt="" />
            </div>
            {/* <div className="modal">
              <NutritionModal />
            </div> */}
          </div>

          <div className="navLinks">
            <div className="link">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Training
              </Link>
              <img className="downarrow" src={downarrow} alt="" />
            </div>
            {/* <div className="modal">
              <TrainingModal />
            </div> */}
          </div>

          <img className="profilepic" src={defaultprofilepic} alt="" />
        </nav>
      </div>
    </Container>
  );
};

export default Header;
