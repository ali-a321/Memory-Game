import React from "react";
import './App.css';

export default function IndividualCard(props){

    return (
        <div className="foodPiece" onClick ={props.gameLogic.bind(this,props.title)}> 
           <img src={props.item} alt ={props.title}  />
           <div className="foodTitle"> {props.title} </div>
        </div>
    )
}