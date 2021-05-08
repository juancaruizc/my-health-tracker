import React from "react";
import "./App.css";
// import axios from "axios";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import styled from "styled-components";

// https://cloud.ouraring.com/docs/ <- API documentation

const Container = styled.div`
  .App {
    background: #f4f6f7;
    height: 100vh;
  }
`;

function App() {
  // const [sleepData, setSleepData] = useState([]);
  // const [readinessData, setReadinessData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.ouraring.com/v1/sleep?start=2021-04-10&end=2021-04-19",
  //       {
  //         headers: {
  //           Authorization: "Bearer IOC63JCAOMI2RGT4SONFW6DGRYWP6BZC",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.sleep);
  //       setSleepData(res.data.sleep);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
      <div className="App">
        <Header />
        <Home />
        {/* {sleepData.map((data) => (
        <div key={data.summary_date}>
          <h1>{data.score}</h1>
          <h2>{data.summary_date}</h2>
        </div>
      ))} */}
      </div>
    </Container>
  );
}

export default App;
