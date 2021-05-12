import React from "react";
import styled from "styled-components";
import sleepDash from "./sleepDashboard.svg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  .dashboard {
    background-color: #15171b;
    width: 250px;
    height: 260px;
    border-radius: 10px;
  }

  .dashboardsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .quickLinks {
    width: 850px;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
  }

  h2 {
    color: white;
    text-align: left;
  }

  h3 {
    font-size: 14px;
    text-align: left;
    margin-left: 16px;
    color: white;
  }

  img {
    width: 250px;
    border-radius: 10px 10px 0px 0px;
  }
`;

const QuickLinks: React.FC = () => {
  let history = useHistory();

  const pushToSleep = () => {
    history.push("/sleep");
  };

  return (
    <Container>
      <div className="main">
        <div className="quickLinks">
          <h2>Quick Links</h2>

          <div className="dashboardsDiv" onClick={pushToSleep}>
            <div className="dashboard">
              <img src={sleepDash} alt="" />
              <h3>Sleep Dashboard</h3>
            </div>

            <div className="dashboard">
              <h3>Nutrition Dashboard</h3>
            </div>

            <div className="dashboard">
              <h3>Training Dashboard</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuickLinks;
