import "./AboutMe.css";
import React from "react";
import PortfolioList from "./PortfolioList";
import ButtonList from "./ButtonList";
import AboutMe from "./AboutMe";



const App = () => {

  return (
    <div className="app">
      <div>
        <AboutMe />
      </div>
      <div>
        <ButtonList />
      </div>
      <div className="ui relaxed divided list">
        <PortfolioList />
      </div>
    </div>
  );
}

export default App;