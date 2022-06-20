import React from 'react'
import "collapsibleCard.css";

export default function CollapsibleCard({logo, cardBody, title}) {
    return (
        <div className="card-container">
            <h1 className="title">
                {title}
            </h1>
            <div className="logo">
                <img src={logo} alt="image"/>
            </div>
            <div className="card-body">
                {cardBody}
            </div>
        </div>
    )
}
