import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .dashboard {
    background-color: white;
    width: 250px;
    height: 200px;
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
  }
`;

const QuickLinks: React.FC = () => {
  return (
    <Container>
      <div className="main">
        <div className="quickLinks">
          <h2>Quick Links</h2>

          <div className="dashboardsDiv">
            <div className="dashboard">
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
