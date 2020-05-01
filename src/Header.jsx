import React from "react";
import styled from "styled-components";

const FixedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8vh;
  background-color: ${(props) => {
    props.theme.colors.darkGrey;
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 20px;
    font-family: Helvetica, sans-serif;
    font-size: 3em;
    color: ${(props) => props.theme.colors.tomato};
  }

  & > p {
    cursor: pointer;
  }
`;

const Header = (props) => {
  return (
    <FixedHeader>
      <p onClick={() => props.toggleMenu()}>=</p>
      <p>Domates</p>
      <p></p>
    </FixedHeader>
  );
};

export default Header;
