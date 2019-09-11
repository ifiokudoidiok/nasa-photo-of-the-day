import React, {useState, useEffect} from "react";
import axios from 'axios';

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
        
        <div className="description-text">
        <h2>Description:</h2>
        <p>
        {displayDescription.data}
        </p>
        
        </div>
    )
}

  export default Description