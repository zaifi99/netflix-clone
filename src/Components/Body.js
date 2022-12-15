import React from "react";
import "../body.css"

export default function Body(props){

    return(
        <>
        <div className="bodydiv">
        <div className="bodytext">
            <h1>{props.heading}</h1> 
            <h4>{props.text}</h4>
            </div>
            <img className="bodyimg" src={props.image} alt="" />
        </div>
        
        </>
    )
}