import React from "react";
import styled from "styled-components";

import CounterContainer from "/containers/CounterContainer";

const StyledDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <StyledDiv>
      <CounterContainer />
    </StyledDiv>
  );
};

export default App;