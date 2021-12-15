import React from "react";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import axios from "axios";
export class GameItem extends React.Component{

    constructor(){
        super()
        this.DeleteGame = this.DeleteGame.bind(this)
    }

    DeleteGame(){
        console.log('Deleted: '+this.props.game._id)
        axios.delete('http://localhost:4000/list/'+this.props.game._id)
        .then(()=>{
            this.props.ReloadData()
        })
        .catch()
    }

    render(){
        return(
            <div>
                <h4>{this.props.game.title}</h4>
                <p>{this.props.game.year}</p>
                <p>{this.props.game.console}</p>
                <img src={this.props.game.Image}></img>
                <br/>
                <Link to={"/edit/"+this.props.game._id} className="btn btn-primary">Edit</Link>
                <br/>
                <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>
            </div>
        )
    }
}