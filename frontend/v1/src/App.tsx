import React, { Fragment } from "react";
import "./App.css";
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
