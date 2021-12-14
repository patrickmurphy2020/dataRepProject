import React from "react";
import { GameItem } from "./gameItem";

export class Games extends React.Component{
    render(){
        return this.props.games.map((game)=>{
            return <GameItem game={game}></GameItem>
        })
    }
}