import React from "react";
import styled from "styled-components";

const Progress = styled.progress`
  display: block;
  height: 30px;
  width: 40%;
  -webkit-appearance: none;
  appearance: none;
  &[value]::-webkit-progress-bar {
    background-color: ${(props) => props.theme.colors.lightGrey};
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    overflow: hidden;
  }
  &::-webkit-progress-value {
    transition: width 1s;
    background-color: ${(props) => props.theme.colors.green};
  }
`;

const DurationProgressBar = (props) => {
  return <Progress value={props.value} max={props.max}></Progress>;
};

export default DurationProgressBar;
