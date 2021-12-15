import axios from "axios";
import React from "react";
import { Games } from "./games";

export class Read extends React.Component {
    constructor() {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        games: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list')
            .then((response) => {
                this.setState({ games: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    ReloadData() {
        axios.get('http://localhost:4000/list')
            .then((response) => {
                this.setState({ games: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>This is my read component</h1>
                <Games games={this.state.games} ReloadData={this.ReloadData}></Games>
            </div>
        )
    }
}