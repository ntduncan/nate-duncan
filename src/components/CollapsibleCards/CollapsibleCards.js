import React from 'react'
import "collapsibleCards.css";
import {CollapsibleCard} from "CollapsibleCard.js";

export default function CollapsibleCards({cardData}) {
    return (
        <div>
            {
                cardData.forEach(card => {
                    <CollapsibleCard logo={card.logo} cardBody={card.body} title={card.title}/>
                })
            }
        </div>
    )
}
