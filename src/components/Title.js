import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <>
      <h2>Title:</h2>
      {displayTitle.data}
    </>
  );
}

export default Title;
