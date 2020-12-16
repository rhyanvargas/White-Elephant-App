import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/game-play-page/Header";
import { GamePlayPage } from "./components/GamePlayPage";
import { mockGiftData, mockPlayerData } from "./components/mockData";

function App() {
  return (
    <Fragment>
      <GamePlayPage
        className="Gameplay"
        gifts={mockGiftData}
        players={mockPlayerData}
      />
    </Fragment>
  );
}

export default App;
