import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SlideMenu from "./SlideMenu";
import DurationProgressBar from "./DurationProgressBar";
import Theme from "./Theme";
import Header from "./Header";

import { useInterval } from "./utils";

const ROUND_FOCUS = "Focus";
const ROUND_SHORT_BREAK = "Short Break";
const ROUND_LONG_BREAK = "Long Break";

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

const notify = () => {
  if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }
};

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [time, setTime] = useState(0);
  const [focusRoundDuration, setFocusRoundDuration] = useState(10);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(25);
  const [rounds, setRounds] = useState(2);
  const [notify, setNotify] = useState(false);
  const [curRound, setCurRound] = useState(ROUND_FOCUS);
  const [roundNo, setRoundNo] = useState(1);

  const getCurrentRoundDuration = () => {
    if (curRound === ROUND_FOCUS) {
      return focusRoundDuration;
    } else if (curRound === ROUND_SHORT_BREAK) {
      return shortBreakDuration;
    } else if (curRound === ROUND_LONG_BREAK) {
      return longBreakDuration;
    } else {
      return 0;
    }
  };

  const start = () => {
    useInterval(
      () => {
        setTime(time + 1);
      },
      time === getCurrentRoundDuration() ? null : 1000
    );
  };

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  const iterateRound = () => {
    if (curRound === ROUND_FOCUS) {
      if (roundNo < rounds) {
        setCurRound(ROUND_SHORT_BREAK);
        setTime(0);
      } else {
        setCurRound(ROUND_LONG_BREAK);
        setTime(0);
      }
    } else if (curRound === ROUND_SHORT_BREAK) {
      setRoundNo(roundNo + 1);
      setCurRound(ROUND_FOCUS);
      setTime(0);
    } else if (curRound === ROUND_LONG_BREAK) {
      setRoundNo(1);
      setCurRound(ROUND_FOCUS);
      setTime(0);
    }
  };

  return (
    <Theme>
      <SlideMenu hideto={hidden} />
      <Header toggleMenu={toggleMenu}></Header>
      <Container>
        <Text size={2}>{`Round ${roundNo} / ${rounds}`}</Text>
        <Text size={3}>{curRound}</Text>
        <Text size={3}>{time ? time : "DONE"}</Text>
        {time === getCurrentRoundDuration() ? iterateRound() : null}
        <DurationProgressBar
          value={time}
          max={getCurrentRoundDuration()}
        ></DurationProgressBar>
      </Container>
    </Theme>
  );
};

export default App;
