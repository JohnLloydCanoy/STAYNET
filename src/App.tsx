import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./Home.tsx";
import About from "./About.tsx";
import BookNow from "./BookNow.tsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <NavigationBar
        onHomeClick={() => setPage("home")}
        onAboutClick={() => setPage("about")}
        onBookNowClick={() => setPage("contact")}
      />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <BookNow />}
    </>
  );
}
export default App;