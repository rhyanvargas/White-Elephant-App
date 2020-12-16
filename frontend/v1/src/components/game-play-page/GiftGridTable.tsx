import React from "react";
import "./gift-grid-table/styles/giftGridTable.css";

interface GiftGridTableProps {
  gifts: Array<any>;
}
export const GiftGridTable = (props: GiftGridTableProps) => {
  const gridCells: Array<JSX.Element> = [];
  props.gifts.forEach((gift) => {
    gridCells.push(
      <div className="grid-item">
        <div className="grid-item-image">
          <img src={gift.image} alt="" />
        </div>
        <div className="grid-item-info">
          <div className="label--small">{gift.name}</div>
          <div className="label--small warning"> Steals: {gift.steals}</div>
        </div>
      </div>
    );
  });

  return <div className="grid-container container">{gridCells}</div>;
};
