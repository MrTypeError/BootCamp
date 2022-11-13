import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">This is the Footer </footer>
    </div>
  );
}

function Dashboard() {
  return <h1>This is Dashboard</h1>;
}

function About() {
  return <h1>This is About Section</h1>;
}

function Home() {
  return <h1>This is the Home Section</h1>;
}

export default App;
