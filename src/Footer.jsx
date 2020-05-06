import React from "react";
import styled from "styled-components";
import { Text } from "./CommonElements";
import { FaGithub } from "react-icons/fa";

const FooterDiv = styled.div`
  position: absolute;
  top: 96vh;
  left: 0;
  height: 4vh;
  width: 100vw;
  z-index: 20;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <Text>
        Made with love by Berke
        <a href="github.com/berkeatac">
          <FaGithub
            style={{ color: `white`, marginLeft: `10px`, size: `2em` }}
          />
        </a>
      </Text>
    </FooterDiv>
  );
};

export default Footer;
