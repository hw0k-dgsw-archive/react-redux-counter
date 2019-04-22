import React, { useState } from "react";
import styled from "styled-components";
import style from "/styles/base";

const StyledDiv = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
  font-size: 2rem;
  color: white;
  background-color: ${props => props.color};
  transition: background-color 0.4s;
  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const Counter = (props) => {
  const [color, setColor] = useState(style.color.blue);
  const [hoverColor, setHoverColor] = useState(style.color.blueDarken);
  return (
    <StyledDiv color={color} hoverColor={hoverColor}>
      0
    </StyledDiv>
  );
};

export default Counter;