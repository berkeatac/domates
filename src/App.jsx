import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SlideMenu from "./SlideMenu";
import DurationProgressBar from "./DurationProgressBar";
import Theme from "./Theme";
import Header from "./Header";
import Footer from "./Footer";
import ControlButton from "./ControlButton";
import { Text } from "./CommonElements";
import { useInterval, parseTime, sendNotif } from "./utils";

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

const App = () => {
  const [time, setTime] = useState(0);
  const [focusRoundDuration, setFocusRoundDuration] = useState(10);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [rounds, setRounds] = useState(4);
  const [hidden, setHidden] = useState(false);
  const [notify, setNotify] = useState(false);
  const [curRound, setCurRound] = useState("");
  const [roundNo, setRoundNo] = useState(1);
  const [isStopped, setIsStopped] = useState(false);

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

  useEffect(() => {
    time === getCurrentRoundDuration() * 60 ? iterateRound() : null;
  }, [time]);

  useInterval(
    () => {
      setTime(time + 1);
    },
    time === getCurrentRoundDuration() * 60 || isStopped ? null : 1000
  );

  const toggleMenu = () => {
    setHidden(!hidden);
  };

  const iterateRound = () => {
    if (curRound === ROUND_FOCUS) {
      if (roundNo < rounds) {
        setCurRound(ROUND_SHORT_BREAK);
        setTime(0);
        sendNotif("Short Break Started");
      } else {
        setCurRound(ROUND_LONG_BREAK);
        setTime(0);
        sendNotif("Long Break Started");
      }
    } else if (curRound === ROUND_SHORT_BREAK) {
      setRoundNo(roundNo + 1);
      setCurRound(ROUND_FOCUS);
      setTime(0);
      sendNotif("Focus Round Started");
    } else if (curRound === ROUND_LONG_BREAK) {
      setRoundNo(1);
      setCurRound(ROUND_FOCUS);
      setTime(0);
      sendNotif("Focus Round Started");
    }
  };

  return (
    <Theme>
      <SlideMenu
        hideto={hidden}
        setFocusRoundDuration={setFocusRoundDuration}
        setShortBreakDuration={setShortBreakDuration}
        setLongBreakDuration={setLongBreakDuration}
        setRounds={setRounds}
      />
      <Header toggleMenu={toggleMenu}></Header>
      <Container>
        <Text size={2}>{`Round ${roundNo} / ${rounds}`}</Text>
        <Text size={3}>{curRound}</Text>
        <Text size={3}>{time ? parseTime(time) : " "}</Text>
        <DurationProgressBar
          value={time}
          max={getCurrentRoundDuration() * 60}
        ></DurationProgressBar>
        <ControlButton
          buttonText={`start`}
          onClick={() => setCurRound(ROUND_FOCUS)}
        ></ControlButton>
        <ControlButton
          buttonText={`stop / resume`}
          onClick={() => setIsStopped(!isStopped)}
        ></ControlButton>
      </Container>
      <Footer></Footer>
    </Theme>
  );
};

export default App;
