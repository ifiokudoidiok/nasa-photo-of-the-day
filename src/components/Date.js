import React, {useState, useEffect} from "react";
import axios from 'axios';


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
        <>
           <h2> Today: <span>{displayDate.data}</span></h2>
        
        </>
    )
}

    export default Date