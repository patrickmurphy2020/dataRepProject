import React from "react";
import {Link} from 'react-router-dom'

export class GameItem extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.game.title}</h4>
                <p>{this.props.game.year}</p>
                <p>{this.props.game.console}</p>
                <img src={this.props.game.Image}></img>
                <br/>
                <Link to={"/edit/"+this.props.game._id} className="btn btn-primary">Edit</Link>
            </div>
        )
    }
}