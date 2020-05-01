import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SlideMenu from "./SlideMenu";
import DurationProgressBar from "./DurationProgressBar";
import Theme from "./Theme";
import Header from "./Header";

import { useInterval } from "./utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkGrey};
  height: 100vh;
  width: 100vw;

  & > * {
    margin-top: 15px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: ${(props) => props.size}em;
  font-family: "Helvetica";
`;

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState(20);

  useInterval(
    () => {
      setTime(time - 1);
    },
    time ? 1000 : null
  );

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  return (
    <Theme>
      <SlideMenu hideto={hidden} />
      <Header toggleMenu={toggleMenu}></Header>
      <Container>
        <Text size={3}>{time ? time : "DONE"}</Text>
        {time ? null : setTime(5)}
        <DurationProgressBar value={20 - time} max={20}></DurationProgressBar>
      </Container>
    </Theme>
  );
};

export default App;
