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
      employeeId: "1",
    },
    {
      firstname: "Sandip",
      lastname: "Dutta",
      age: "22",
      post: "CEO",
      employeeId: "2",
    },
    {
      firstname: "Sagar",
      lastname: "Pal",
      age: "25",
      post: "Developer",
      employeeId: "3",
    },
    {
      firstname: "Sanu",
      lastname: "Das",
      age: "28",
      post: "Developer",
      employeeId: "4",
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
        {/* using map concept we can use ... that is a spread operator */}

        {/* Map */}

        {employeeInfo.map((employee) => {
          const { firstname, lastname, age, post } = employee;
          return <Employee key={employeeId} firstname={firstname} lastname={lastname} age={age} post={post} />;
        })}

        {/* (...) same thing using spread operator */}

        {/* {employeeInfo.map((employee) => {
          return <Employee {...employee} />;
        })} */}

        {/* <Employee firstname="Sudip" lastname="Dutta" age="18" post="Manager"/>
    <Employee firstname="Sandip" lastname="Dutta" age="19" post="CEO"/>
    <Employee firstname="Sagar" lastname="Pal" age="22" post="HR"/>
    <Employee firstname="Sanu" lastname="Das" age="24" post="Developer"/> */}
      </header>
    </div>
  );
}

export default App;
