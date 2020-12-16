import React from "react";
import { readConfigFile } from "typescript";
import { GiftGridTable } from "./game-play-page/GiftGridTable";
import { Header } from "./game-play-page/Header";
import { PlayerInfo } from "./game-play-page/PlayerInfo";
import { PlayerList } from "./game-play-page/PlayerList";
import "./game-play-page/styles/gamePlayPage.css";

interface GamePlayPageProps {
  gifts: Array<any>;
  players: any;
  className: string;
}
export const GamePlayPage = (props: GamePlayPageProps) => {
  // header
  // giftGridTable
  // playerInfo
  // playerList
  const headerText = "Choose a gift wisely...";
  const playerInfo = {
    number: 12,
    gift: {
      name: "bike",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-GnSMG_fqApWS62KY_-dV19CGUHluquxXKiktgec1OplYB0A4EMV3xu8z0HXd3KGZ6X8gFZ0&usqp=CAc",
      url: "https://www.google.com/",
    },
  };

  const isUpNow = "!@#$1";
  return (
    <div className={props.className}>
      <div className="gift-table-wrapper">
        <PlayerList players={props.players} isUpNowID={isUpNow} />
        <Header header={headerText} />
        <GiftGridTable gifts={props.gifts} />
      </div>
      <PlayerInfo info={playerInfo} />
    </div>
  );
};
