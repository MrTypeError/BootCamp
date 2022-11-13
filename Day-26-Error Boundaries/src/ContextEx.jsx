import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// ***********************************************
// IMPORTENT
// ***********************************************

// This problem of the property
// unnecessary occurring at multiple
// parent component this is
// known as prop drilling

const UserContext = createContext(null);
const ThemeContext = createContext("dark");

function Bar({ user }) {
  return (
    <>
      <UserContext.Provider value={"joe"}>
        <h2>this is bar</h2>
        <Baz user={user} />
      </UserContext.Provider>
    </>
  );
}
// function Bar({ user }) {
//   return (
//     <>
//       <h2>This is Bar !!</h2>
//       <Baz user={user} />
//     </>
//   );
// }

// It Gets Updated by the nearest Ansister value

function Bar({ user }) {
  return (
    <>
      <userContext.Provider user={"Sagar"}>
        <h2>This is Bar !!</h2>
        <Baz user={user} />
      </userContext.Provider>
    </>
  );
}

// Without Using userContext hook

// function Baz(props) {
//   return (
//     <>
//       <h2>This is Buz !! hello {props.user}</h2>
//     </>
//   );
// }

function Baz() {
  const username = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <h3 style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
      this is baz, wazzup {username}
    </h3>
  );
}

export default function ContextEx() {
  const username = "gaurav";
  const [theme, setTheme] = useState("light");
  return (
    <div>
      Parent app say Hello {username}
      <UserContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Foo user={username} />
        </ThemeContext.Provider>
      </UserContext.Provider>
      <button onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>Toggle theme</button>
    </div>
  );
}
