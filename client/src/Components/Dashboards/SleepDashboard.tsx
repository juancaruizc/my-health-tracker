import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  h1 {
    color: white;
  }
`;

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

  useEffect(() => {
    axios
      .get(
        `https://api.ouraring.com/v1/readiness?start=2021-01-01&end=2021-05-11`,
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
        `https://api.ouraring.com/v1/sleep?start=2021-01-01&end=2021-05-11`,
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

  return (
    <Container>
      <div className="main">
        <h1>Sleep</h1>
      </div>
    </Container>
  );
};

export default SleepDashboard;
