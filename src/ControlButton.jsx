import React from "react";
import styled from "styled-components";
import { Text } from "./CommonElements";

const StartButton = styled.button`
  height: 50px;
  width: 160px;
  background-color: ${(props) => props.theme.colors.tomato};
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > p {
    margin: 0px;
  }
`;

const ControlButton = (props) => {
  return (
    <StartButton onClick={() => props.onClick()}>
      <Text size={2}>{props.buttonText}</Text>
    </StartButton>
  );
};

export default ControlButton;
