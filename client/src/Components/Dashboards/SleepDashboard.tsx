import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  h1 {
    color: white;
    width: 2000px;
    text-align: left;
  }

  h2 {
    color: white;
    font-size: 14px;
    width: 100px;
    text-align: left;
  }

  .sleepDashboard {
    background: #15171b;
    width: 2000px;
    height: 60vh;
    border-radius: 10px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .titles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1950px;
    margin-left: 30px;
    margin-top: 50px;
    border-bottom: 2px solid #2c516d;
  }

  h3 {
    color: white;
    font-size: 14px;
    width: 100px;
    text-align: left;
  }

  .sleepDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1950px;
    margin-left: 30px;
    border-bottom: 2px solid #2c516d;
  }
`;

const yearly = [
  {
    year: 2021,
    month: "January",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "February",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "March",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "April",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "May",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "February",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "June",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "July",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "August",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "September",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "October",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "November",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
  {
    year: 2021,
    month: "December",
    sleepS: "10:00",
    sleepE: "7:00",
    sleepD: "8:00",
    awakeT: "4:00",
    lightT: "5:00",
    remT: "2:00",
    deepT: "4:00",
    hr: 80,
    lrhr: 50,
    lrhrT: "2:30",
    temp: 88,
    rr: 20,
    hrv: 120,
    timing: 100,
    readiness_score: 80,
    sleep_score: 99,
  },
];

const yearlyViewAverage = () => {};

const SleepDashboard = () => {
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
  const [yearlyViewSleep, setYearlyViewSleep] = useState([]);
  const [yearlyViewReadiness, setYearlyViewReadiness] = useState([]);
  const [monthylView, setMonthlyView] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.ouraring.com/v1/readiness?start=2021-01-01&end=2021-01-31`,
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
        setYearlyViewReadiness(res.data.readiness);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.ouraring.com/v1/sleep?start=2021-01-01&end=2021-01-31`,
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
        setYearlyViewSleep(res.data.sleep);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("sheeesshh", yearlyViewSleep);
  console.log("readiness sheeesh", yearlyViewReadiness);
  return (
    <Container>
      <div className="main">
        <h1>Sleep</h1>
        <div className="sleepDashboard">
          <div className="titles">
            <h2>2021</h2>
            <h2>SleepS</h2>
            <h2>SleepE</h2>
            <h2>SleepD</h2>
            <h2>AwakeT</h2>
            <h2>LightT</h2>
            <h2>REMT</h2>
            <h2>DeepT</h2>
            <h2>HR</h2>
            <h2>LRHR</h2>
            <h2>LRHRT</h2>
            <h2>Temp</h2>
            <h2>RR</h2>
            <h2>HRV</h2>
            <h2>Timing%</h2>
            <h2>Readiness%</h2>
            <h2>SScore%</h2>
          </div>

          {yearly.map((year) => (
            <div className="sleepDetails">
              <h2>{year.month}</h2>
              <h3>{year.sleepS}</h3>
              <h3>{year.sleepE}</h3>
              <h3>{year.sleepD}</h3>
              <h3>{year.awakeT}</h3>
              <h3>{year.lightT}</h3>
              <h3>{year.remT}</h3>
              <h3>{year.deepT}</h3>
              <h3>{year.hr}</h3>
              <h3>{year.lrhr}</h3>
              <h3>{year.lrhrT}</h3>
              <h3>{year.temp}</h3>
              <h3>{year.rr}</h3>
              <h3>{year.hrv}</h3>
              <h3>{year.timing}</h3>
              <h3>{year.readiness_score}</h3>
              <h3>{year.sleep_score}</h3>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SleepDashboard;
