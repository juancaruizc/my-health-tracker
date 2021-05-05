import React from "react";
import styled from "styled-components";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth();
let year = newDate.getFullYear();
let day = newDate.getDay();

function dateChanger(day) {
  if (day === 1) {
    return "Mon";
  } else if (day === 2) {
    return "Tues";
  } else if (day === 3) {
    return "Wed";
  } else if (day === 4) {
    return "Thurs";
  } else if (day === 5) {
    return "Fri";
  } else if (day === 6) {
    return "Sat";
  } else if (day === 7) {
    return "Sun";
  }
  return dateChanger();
}

function monthChanger(month) {
  if (month === 1) {
    return "Jan";
  } else if (month === 2) {
    return "Feb";
  } else if (month === 3) {
    return "March";
  } else if (month === 4) {
    return "April";
  } else if (month === 5) {
    return "May";
  } else if (month === 6) {
    return "June";
  } else if (month === 7) {
    return "July";
  } else if (month === 8) {
    return "Aug";
  } else if (month === 9) {
    return "Sept";
  } else if (month === 10) {
    return "Oct";
  } else if (month === 11) {
    return "Nov";
  } else if (month === 12) {
    return "Dec";
  }
  return monthChanger();
}

const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
  }

  .sleepSummary {
    background: #ffffff;
    width: 1050px;
    height: 280px;
    border-radius: 10px;
    display: flex;

    align-items: center;
  }

  .header {
    display: flex;
    align-items: center;
    margin-right: 735px;
  }
  .date {
    margin-top: 28px;
    margin-left: 10px;
  }

  h3 {
    font-size: 144px;
    margin: 0;
    color: #42418c;
  }

  h2 {
    margin-bottom: 0;
  }

  .sleepScore {
    margin-left: 20px;
  }

  .readinessScore {
    margin-left: 40px;
  }

  .keyMetrics {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 175px;
    flex-wrap: wrap;
    width: 550px;
    margin-left: 100px;
  }

  .keyMetricsInner {
    width: 125px;
    height: 50px;
  }

  h5 {
    color: #e9943e;
    font-size: 18px;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 10px;
  }
`;

function Home() {
  return (
    <Container>
      <div className="main">
        <div className="header">
          <h1>Sleep Stats</h1>
          <p className="date">
            {dateChanger(day)}, {monthChanger(month)} {date}, {year}
          </p>
        </div>
        <div className="sleepSummary">
          <div className="sleepScore">
            <h2>Sleep</h2>
            <h3>96</h3>
          </div>

          <div className="readinessScore">
            <h2>Readiness</h2>
            <h3>89</h3>
          </div>

          <div className="keyMetrics">
            <div className="keyMetricsInner">
              <h4>Duration Time</h4>
              <h5>8:00</h5>
            </div>
            <div className="keyMetricsInner">
              <h4>Deep Time</h4>
              <h5>2:00</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>REM Time</h4>
              <h5>1:00</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>Light Time</h4>
              <h5>5:00</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>Sleep Start</h4>
              <h5>11:00PM</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>Sleep End</h4>
              <h5>6:50AM</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>Awake Time</h4>
              <h5>0:30</h5>
            </div>

            <div className="keyMetricsInner">
              <h4>HRV</h4>
              <h5>120</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
