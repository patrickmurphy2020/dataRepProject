import axios from "axios";
import React from "react";
import { Games } from "./games";

export class Read extends React.Component{
    
   state = {
       games: [
        // {
        //     "Title":"The Legend of Zelda",
        //     "Year":"1986",
        //     "Console":"NES",
        //     "Image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fprofessionalmoron.com%2F2019%2F10%2F06%2Fthe-legend-of-zelda-nes%2F&psig=AOvVaw3nmkaQpRTRWl_QNUyU_rt3&ust=1638318472382000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiStZTrvvQCFQAAAAAdAAAAABAD"
        // },
        // {
        //     "Title":"A Link To The Past",
        //     "Year":"1991",
        //     "Console":"SNES"
        // },
        // {
        //     "Title":"Ocarina of Time",
        //     "Year":"1998",
        //     "Console":"N64"
        // },
        // {
        //     "Title":"Wind Waker HD",
        //     "Year":"2013",
        //     "Console":"Wii U"
        // }
       ]
   } 
    componentDidMount(){
        axios.get('http://localhost:4000/list')
        .then((response)=>{
            this.setState({games:response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    } 

    render(){
        return(
            <div>
                <h1>This is my read component</h1>
                <Games games={this.state.games}></Games>
            </div>
        )
    }
}