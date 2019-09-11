import React, {useState, useEffect}from "react";
import axios from 'axios';
import "./App.css";

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb';
function App() {

  useEffect(() => {
    axios.get(nasaApi)
      .then(response =>{
        // debugger
      })
      .catch(error => {
        
      })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
