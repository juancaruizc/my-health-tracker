import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import loadingImg from "./loadingLogo.gif";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let day = newDate.getDay() - 1;

console.log("dateee", `0${month}`, year, date);

function dateChanger(day: number): string {
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
  return dateChanger(day);
}

function monthChanger(month: number): string {
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
  return monthChanger(month);
}

const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
  }

  .sleepSummary {
    background-color: #15171b;
    width: 1050px;
    height: 280px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    display: flex;
    align-items: center;
    margin-right: 735px;
  }
  .date {
    margin-top: 28px;
    margin-left: 10px;
    color: white;
  }

  h3 {
    font-size: 144px;
    margin: 0;
    color: #2c516d;
  }

  h2 {
    margin-bottom: 0;
    text-align: left;
    color: white;
  }

  h1 {
    color: white;
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
    color: #545456;
    font-size: 18px;
    margin-top: 0;
    text-align: left;
  }
  h4 {
    margin-bottom: 10px;
    text-align: left;
    color: white;
  }

  .loadingImg {
    display: flex;
    justify-content: center;
    width: 10%;
  }
`;
const Home: React.FC = () => {
  const [sleepScore, setSleepScore] = useState([]);
  const [sleepDurationTime, setSleepDurationTime] = useState([]);
  const [sleepDeepTime, setSleepDeepTime] = useState([]);
  const [sleepRemTime, setSleepRemTime] = useState([]);
  const [sleepLightTime, setSleepLightTime] = useState([]);
  const [sleepStartTime, setSleepStartTime] = useState([]);
  const [sleepEndTime, setSleepEndTime] = useState([]);
  const [sleepAwakeTime, setSleepAwakeTime] = useState([]);
  const [readinessScore, setReadinessScore] = useState([]);
  const [hrvScore, setHrvScore] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.ouraring.com/v1/readiness?start=${year}-0${month}-${
          date - 1
        }&end=${year}-0${month}-${date - 1}`,
        {
          headers: {
            Authorization: "Bearer IOC63JCAOMI2RGT4SONFW6DGRYWP6BZC",
          },
        }
      )
      .then((res) => {
        console.log(res.data.readiness);
        setReadinessScore(res.data.readiness[0].score);
        setHrvScore(res.data.readiness[0].score_hrv_balance);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.ouraring.com/v1/sleep?start=${year}-0${month}-${
          date - 1
        }&end=${year}-0${month}-${date - 1}`,
        {
          headers: {
            Authorization: "Bearer IOC63JCAOMI2RGT4SONFW6DGRYWP6BZC",
          },
        }
      )
      .then((res) => {
        console.log(res.data.sleep);
        setSleepScore(res.data.sleep[0].score);
        setSleepDurationTime(res.data.sleep[0].duration);
        setSleepDeepTime(res.data.sleep[0].deep);
        setSleepRemTime(res.data.sleep[0].rem);
        setSleepLightTime(res.data.sleep[0].light);
        setSleepStartTime(res.data.sleep[0].bedtime_start);
        setSleepEndTime(res.data.sleep[0].bedtime_end);
        setSleepAwakeTime(res.data.sleep[0].awake);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.ouraring.com/v1/userinfo?access_token=IOC63JCAOMI2RGT4SONFW6DGRYWP6BZC"
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
          {isLoading ? (
            <img className="loadingImg" src={loadingImg} alt="" />
          ) : (
            <>
              <div className="sleepScore">
                <h2>Sleep</h2>
                <h3>{sleepScore}</h3>
              </div>
              <div className="readinessScore">
                <h2>Readiness</h2>
                <h3>{readinessScore}</h3>
              </div>
              <div className="keyMetrics">
                <div className="keyMetricsInner">
                  <h4>Duration Time</h4>
                  <h5>{sleepDurationTime}</h5>
                </div>
                <div className="keyMetricsInner">
                  <h4>Deep Time</h4>
                  <h5>{sleepDeepTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>REM Time</h4>
                  <h5>{sleepRemTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>Light Time</h4>
                  <h5>{sleepLightTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>Sleep Start</h4>
                  <h5>{sleepStartTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>Sleep End</h4>
                  <h5>{sleepEndTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>Awake Time</h4>
                  <h5>{sleepAwakeTime}</h5>
                </div>

                <div className="keyMetricsInner">
                  <h4>HRV</h4>
                  <h5>{hrvScore}</h5>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
