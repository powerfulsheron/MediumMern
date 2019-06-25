import React from "react";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";

//import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  );
}

export default App;
