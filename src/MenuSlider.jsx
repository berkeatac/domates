import React, { useState } from "react";
import styled from "styled-components";

import { Text } from "./CommonElements";
import { parseTime } from "./utils";

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: grey;
  outline: none;
  opacity: 0.85;
  transition: opacity 0.2s;
  border-radius: 2px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 6px;
    background: #4caf50;
    cursor: pointer;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

const MenuSlider = ({ initial, max, title, setPomoValue, noParse }) => {
  const [value, setValue] = useState(initial);

  const handleChange = (event) => {
    setValue(event.target.value);
    setPomoValue(parseFloat(event.target.value));
  };

  return (
    <SliderDiv>
      <Text>{title}</Text>
      <Slider
        type="range"
        min="1"
        max={max}
        value={value}
        onChange={handleChange}
      ></Slider>
      <Text>{noParse ? value : parseTime(value * 60)}</Text>
    </SliderDiv>
  );
};

export default MenuSlider;
