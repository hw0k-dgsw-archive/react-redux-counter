import React from "react";
import styled from "styled-components";

import Counter from "/components/Counter";

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
      <Counter />
    </StyledDiv>
  );
};

export default App;