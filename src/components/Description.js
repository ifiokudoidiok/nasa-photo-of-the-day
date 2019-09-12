import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

const bigPadding = '4px';
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${bigPadding};
  &:hover{
    border: 4px solid green;
  }
  margin-top: 2rem;
  border: 2px solid grey;
  border-radius: 4px;
  h1{
  color: whitesmoke;
}
h2{
  font-size: 2.25rem;
}

  p{
  font-size: 1.25rem;
  color:rgb(252, 252, 252);
}
`
const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb';
function Description(props){
    const [displayDescription, setDisplayDescription] = useState({
        data: []});
      useEffect(() => {
        axios.get(nasaApi)
          .then(response =>{
            // debugger
            setDisplayDescription({
              data: response.data.explanation
            });
            // console.log(response.data.explanation);
          })
          .catch(error => {
    
          })
      }, []);
    return (
        
        <StyledDescription>
        <h2>Description:</h2>
        <p>
        {displayDescription.data}
        </p>
        
        </StyledDescription>
    )
}

  export default Description