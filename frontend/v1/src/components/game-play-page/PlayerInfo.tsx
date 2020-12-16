import React from "react";
import "./player-info/styles/playerInfo.css";

interface PlayerInfoProps {
  info: any;
}
export const PlayerInfo = (props: PlayerInfoProps) => {
  return (
    <div className="info-container">
      <div className="info-header">
        <h2 className="label--big">My Info</h2>
      </div>
      <div className="info-content">
        <div className="info-content-block">
          <div className="info-content-header">
            <h2 className="label">Your Number</h2>
            <div className="info-content-number">{props.info.number}</div>
          </div>
        </div>
        <div className="info-content-block">
          <div className="info-content-header">
            <h2 className="label">Your Gift</h2>
          </div>
          <div className="info-content-gift-name">
            <div className="label--small">{props.info.gift.name}</div>
          </div>
          <div className="info-content-gift-image">
            <img src={props.info.gift.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
