import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

const bigPadding = '4px';

const StyledDate = styled.div`
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

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb';


function Date(props){

    const [displayDate, setDisplayDate] = useState({
        data: []});
    
        useEffect(() => {
          axios.get(nasaApi)
            .then(response =>{
              // debugger
              setDisplayDate({
                data: response.data.date
              });
              // console.log(response.data.explanation);
            })
            .catch(error => {
      
            })
        }, [])
    return(
        <StyledDate>
           <h2> Today: <span>{displayDate.data}</span></h2>
        
        </StyledDate>
    )
}

    export default Date