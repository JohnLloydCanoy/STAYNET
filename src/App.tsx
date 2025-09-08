
import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div>
      <NavigationBar />
      <main className="p-4 min-h-screen centered-content bg-gray-100 text-black">
        <h1 className="text-2xl font-bold">Welcome to STAYNET</h1>

        <p className="mt-2">Your one-stop solution for all your needs.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
