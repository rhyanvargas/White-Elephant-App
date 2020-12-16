import React from "react";
import "./player-list/styles/playerList.css";
interface PlayerListProps {
  players: Array<any>;
  isUpNowID: string;
}

export const PlayerList = (props: PlayerListProps) => {
  const playerList: Array<JSX.Element> = [];

  Object.entries(props.players).forEach((entry) => {
    const playerId = entry[0];
    const player = entry[1];

    if (playerId === props.isUpNowID) {
      playerList.push(
        <div className="player-wrapper active">
          <div className="player-status">
            <h2 className="label success ">Up Now:</h2>
          </div>
          <div className="player-name">
            <h2 className="label--big ">{player.name}</h2>
          </div>
        </div>
      );

      return;
    }
    playerList.push(
      <div className="player-wrapper">
        <div className="player-name">
          <span className="label--small">{player.name}</span>
        </div>
      </div>
    );
  });

  return <div className="player-container">{playerList}</div>;
};
