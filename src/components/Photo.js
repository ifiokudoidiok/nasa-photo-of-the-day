import React, { useState, useEffect } from "react";
import axios from "axios";

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb';
function Photo() {
  const [displayPhoto, setDisplayPhoto] = useState({
    data: []
  });

  useEffect(() => {
    axios
      .get(nasaApi)
      .then(response => {
        // debugger
        setDisplayPhoto({
          data: response.data.url
        });
        // console.log(response.data.url);
      })
      .catch(error => {});
  }, []);
  return (
      
    <figure>
      <img className="image" alt="img-for-today" src={displayPhoto.data}></img>
    </figure>
  );
}

export default Photo;
