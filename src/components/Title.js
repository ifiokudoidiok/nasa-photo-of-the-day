import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';


const bigPadding = '4px';

const StyledTitle = styled.div`
  padding: ${bigPadding};
  &:hover{
    border: 2px solid green;
  }
  margin: 2px;
  border: 2px solid grey;
  border-radius: 4px;
  h1{
  color: whitesmoke;
}

  span {
    color: rgb(134, 121, 121);
    &:hover {
      color: whitesmoke;
      font-weight: bold;
    }
  }
`

const nasaApi =
  "https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb";
function Title(props) {
  const [displayTitle, setDisplayTitle] = useState({
    data: []
  });

  useEffect(() => {
    axios
      .get(nasaApi)
      .then(response => {
        setDisplayTitle({
          data: response.data.title
        });
      })
      .catch(error => {});
  }, []);
  return (
    <StyledTitle>
      <h2>Title: <span>{displayTitle.data}</span></h2>
      
    </StyledTitle>
  );
}

export default Title;
