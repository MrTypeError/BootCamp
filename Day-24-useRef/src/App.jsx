import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";
import KittyGallery from "./KittyGallery";
import useLocalStorage from "./useLocalStorage";
import Multiplier from "./Multiplier";
import Employee from "./Employee";

function App() {
  // const [username, setUsername] = useLocalStorage("username","")
  const employeeInfo = [
    {
      firstname: "Sudip",
      lastname: "Dutta",
      age: "20",
      post: "Manager",
    },
    {
      firstname: "Sandip",
      lastname: "Dutta",
      age: "22",
      post: "CEO",
    },
    {
      firstname: "Sagar",
      lastname: "Pal",
      age: "25",
      post: "Developer",
    },
    {
      firstname: "Sanu",
      lastname: "Das",
      age: "28",
      post: "Developer",
    },
  ];

  return (
    <div className="App">
      {/* <Stopwatch/> */}
      {/* <Counter/>   */}
      {/* <KittyGallery /> */}
      {/* <fieldset>
      <label htmlFor="username">Username</label>
      <input type="text" id='username' value={username} onChange ={(e)=> setUsername(e.target.value)} />
    </fieldset> */}
      {/* <Multiplier /> */}
      <h1> Employee Details </h1>
      <header>
        {employeeInfo.map((employee) => {
          const { firstname, lastname, age, post } = employee;
          return <Employee firstname={firstname} lastname={lastname} age={age} post={post} />;
        })}

        {/* <Employee firstname="Sudip" lastname="Dutta" age="18" post="Manager"/>
    <Employee firstname="Sandip" lastname="Dutta" age="19" post="CEO"/>
    <Employee firstname="Sagar" lastname="Pal" age="22" post="HR"/>
    <Employee firstname="Sanu" lastname="Das" age="24" post="Developer"/> */}
      </header>
    </div>
  );
}

export default App;
