import React from "react";
import styled, { css } from "styled-components";
import MenuSlider from "./MenuSlider";

const Menu = styled.div`
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 8vh;
  left: 0;
  /* background-color: ${(props) =>
    props.hideto
      ? props.theme.colors.darkGrey
      : props.theme.colors.lightGrey}; */
  background-color: rgba(255, 255, 255, 0.02);
  transition: transform 1s cubic-bezier(0, 0.52, 0, 1),
    background-color 1s cubic-bezier(0, 0.52, 0, 1);
  transform: translate3d(${(props) => (props.hideto ? -20 : 0)}vw, 0, 0);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
  }
`;

const SlideMenu = (props) => {
  const {
    hideto,
    setFocusRoundDuration,
    setShortBreakDuration,
    setLongBreakDuration,
    setRounds,
  } = props;
  return (
    <Menu hideto={hideto}>
      <MenuSlider
        max={60}
        initial={10}
        title={"Focus"}
        setPomoValue={setFocusRoundDuration}
      ></MenuSlider>
      <MenuSlider
        max={60}
        initial={5}
        title={"Short Break"}
        setPomoValue={setShortBreakDuration}
      ></MenuSlider>
      <MenuSlider
        max={60}
        initial={15}
        title={"Long Break"}
        setPomoValue={setLongBreakDuration}
      ></MenuSlider>
      <MenuSlider
        max={12}
        initial={4}
        title={"Rounds"}
        setPomoValue={setRounds}
      ></MenuSlider>
    </Menu>
  );
};

export default SlideMenu;
