import React from "react";
import "./player-info/styles/playerInfo.css";

interface PlayerInfoProps {
  info: any;
}
export const PlayerInfo = (props: PlayerInfoProps) => {
  return (
    <div className="info-container">
      <div className="info-title">
        <h2 className="label">Your Number</h2>
      </div>
      <div className="info-number">{props.info.number}</div>
      <div className="info-title">
        <h2 className="label">Your Gift</h2>
        <div className="info-gift-name">{props.info.gift.name}</div>
      </div>
      <div className="info-gift-image">
        <img src={props.info.gift.image} alt="" />
      </div>
    </div>
  );
};
