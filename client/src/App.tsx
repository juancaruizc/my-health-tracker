import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import QuickLinks from "./Components/QuickLinks/QuickLinks";
import NutritionOfTheDay from "./Components/NutritionOfTheDay/NutritionOfTheDay";
import SleepDashboard from "./Components/Dashboards/SleepDashboard";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";

// https://cloud.ouraring.com/docs/ <- API documentation

const Container = styled.div`
  .App {
    background: #101010;
    height: 150vh;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <div className="App">
        <Route exact path="/sleep">
          <Header />
          <SleepDashboard />
          <Footer />
        </Route>

        <Route exact path="/">
          <Header />
          <Home />
          <QuickLinks />
          <NutritionOfTheDay />
          <Footer />
        </Route>
      </div>
    </Container>
  );
};

export default App;
