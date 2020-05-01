import React from "react";
import styled, { css } from "styled-components";
import DurationSlider from "./DurationSlider";

const Menu = styled.div`
  width: 20vw;
  height: 100vh;
  position: fixed;
  top: 8vh;
  left: 0;
  background-color: ${(props) =>
    props.hideto ? props.theme.colors.darkGrey : props.theme.colors.lightGrey};
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
  return (
    <Menu hideto={props.hideto}>
      <DurationSlider title={"Duration"}></DurationSlider>
    </Menu>
  );
};

export default SlideMenu;
