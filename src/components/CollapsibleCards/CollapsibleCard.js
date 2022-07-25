import React from 'react'
import "./CollapsibleCard.css";

export default function CollapsibleCard({logo, cardBody, title}) {
    return (
        <div className="card-container">
            <h1 className="title">
                {title}
            </h1>
            <div>
                <img src={logo} alt="image" className="logo"/>
            </div>
            <div className="card-body">
                {cardBody}
            </div>
        </div>
    )
}
