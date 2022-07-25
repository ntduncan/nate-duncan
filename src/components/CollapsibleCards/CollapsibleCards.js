import React from 'react'
import "./CollapsibleCards.css";
import CollapsibleCard from "./CollapsibleCard.js";

export default function CollapsibleCards({cardData}) {
    return (
        <div className="cards">
            {
                cardData.map(card => { return  <CollapsibleCard key={cardData.indexOf(card)} logo={card.logo} cardBody={card.body} title={card.title} /> })
            }
        </div>
    )
}
