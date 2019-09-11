import React from "react";
import Title from './components/Title';
import Photo from './components/Photo';
import Date from './components/Date';
import Description from './components/Description'
import "./App.css";

function App() {
  //Title
  
  //Date
 

  //Photo
 
  //Description
  

  return (
    <div className="App">
        <h1>
          Today's Photo and Its Story
        </h1>
        <Photo />
        <div className="mid-text">
        <Title/>
        <Date/>
        </div>
        
        <Description /><br/><br/>
    </div>
  );
}

export default App;
