import React, { Component } from 'react';
import "./App.css"
import IDcard from "./components/IDcard/IDcard"
import Greetings from "./components/Greetings/index"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IDcard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IDcard 
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>  

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>   

        <h1>Box Colors</h1> 
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />  
      </div>
    );
    
  }
}

export default App;
