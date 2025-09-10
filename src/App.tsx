
import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
