import React, {useState, useEffect}from "react";
import axios from 'axios';
import "./App.css";

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb';
function App() {
  //Title
  const [displayTitle, setDisplayTitle] = useState({
    data: []});

    useEffect(() => {
      axios.get(nasaApi)
        .then(response =>{
          // debugger
          setDisplayTitle({
            data: response.data.title
          });
          // console.log(response.data.explanation);
        })
        .catch(error => {
  
        })
    }, [])
  //Date
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

  //Photo
  const [displayPhoto, setDisplayPhoto] = useState({
    data: []});

    useEffect(() => {
      axios.get(nasaApi)
        .then(response =>{
          // debugger
          setDisplayPhoto({
            data: response.data.url
          });
          // console.log(response.data.url);
        })
        .catch(error => {
  
        })
    }, [])
  //Description
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
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
        {displayDescription.data}<br/><br/>
        {displayTitle.data}<br/><br/>
        {displayDate.data}<br/><br/>
        
      </p>
      <figure><img className='image' src={displayPhoto.data}></img>
      </figure>
    </div>
  );
}

export default App;
