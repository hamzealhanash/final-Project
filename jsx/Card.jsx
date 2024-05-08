import React from "react";
import "../StyleFiles/CardStyle.scss"

export default function Card(props) {
    return (
        <div className="Card-warp">
            <img src={`../Photo/${props.image}`} alt="notification-Image" className="Card-Image"/>
            <h2 className="Title">{props.title}</h2>
            <p className="dis">{props.description}</p>
        </div>
    )
}