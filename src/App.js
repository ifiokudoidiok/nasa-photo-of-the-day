import React from "react";
import Title from "./components/Title";
import Photo from "./components/Photo";
import Date from "./components/Date";
import Description from "./components/Description";
import styled from "styled-components";

const Body = styled.div`

  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AppStyled = styled.div`
  text-align: center;
  background: rgb(69, 85, 69);
  width: 70vw;
  margin: 0 auto;
  padding: 1rem;
  h2 {
    color: rgb(189, 183, 182);
  }
`;
function App() {

  return (
    <Body>

    <AppStyled>
      <h1>Today's Photo and Its Story</h1>
      <Photo />
      <MiniContainer>
        <Title />
        <Date />
      </MiniContainer>

      <Description />
      <br />
      <br />
    </AppStyled>
    </Body>
  );
}

export default App;
