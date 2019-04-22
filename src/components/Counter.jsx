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
    cursor: pointer;
  }
`;

const Counter = (props) => {
  const [color, setColor] = useState(style.color.blue);
  const [hoverColor, setHoverColor] = useState(style.color.blueDarken);

  const handleClick = (e) => {
    e.preventDefault();
    setColor(style.color.blue);
    setHoverColor(style.color.blueDarken);
    props.CounterActions.increment(1);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setColor(style.color.red);
    setHoverColor(style.color.redDarken);
    props.CounterActions.decrement(1);
  };

  return (
    <StyledDiv color={color} hoverColor={hoverColor} onClick={handleClick} onContextMenu={handleContextMenu}>
      {props.number}
    </StyledDiv>
  );
};

export default Counter;