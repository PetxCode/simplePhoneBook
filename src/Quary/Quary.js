import React from "react";
import styled from "styled-components";

export const Quary = () => {
  return (
    <Container>
      <Wrapper>
        <Card>Join Our New CoHort</Card>
        <Button>Learn More</Button>
      </Wrapper>
    </Container>
  );
};

const Card = styled.div``;

const Button = styled.div`
  position: absolute;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  background-image: url("guy.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 800px) {
    display: flex;
    background-color: #09386d;
    width: 360px;
    height: 100%;
    background-image: url("");
  }
`;

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 50vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
