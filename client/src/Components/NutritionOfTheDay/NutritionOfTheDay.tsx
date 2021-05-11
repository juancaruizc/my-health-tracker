import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .main {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .nutritionOfTheDay {
    width: 850px;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
  }

  .nutritionDiv {
    background-color: white;
    border-radius: 10px;
    height: 250px;
  }

  h2 {
    text-align: left;
  }
`;

function NutritionOfTheDay() {
  return (
    <Container>
      <div className="main">
        <div className="nutritionOfTheDay">
          <h2>Nutrition of the day</h2>
          <div className="nutritionDiv">
            <h3>dfsdfsdf</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NutritionOfTheDay;
