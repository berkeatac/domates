import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: ${(props) => props.size}em;
  font-family: "Helvetica";
`;
