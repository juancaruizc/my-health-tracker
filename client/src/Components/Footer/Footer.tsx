import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .main {
    background-color: #15171b;
    height: 250px;
    margin-top: 600px;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="main"></div>
    </Container>
  );
};

export default Footer;
