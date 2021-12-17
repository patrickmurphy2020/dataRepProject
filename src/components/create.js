import React from "react";
import axios from "axios";

export class Create extends React.Component{
    
    constructor(){
        super()
        
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onChangeConsole = this.onChangeConsole.bind(this)
        this.onChangeImage = this.onChangeImage.bind(this)
        this.onChangeRating = this.onChangeRating.bind(this)
        
        this.state ={
            Title: '',
            Year: '',
            Console: '',
            Image:'',
            Rating:''
        }
    }
    
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value
        })
    }

    onChangeConsole(e){
        this.setState({
            Console:e.target.value
        })
    }

    onChangeImage(e){
        this.setState({
            Image:e.target.value
        })
    }

    onChangeRating(e){
        this.setState({
            Rating:e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault()
        alert("Name: "+this.state.Title + " Year: "+this.state.Year + " Console: "+this.state.Console + " Rating: " +this.state.Rating)

        this.numberOfGames++

        const newGame = {
            image:this.state.Image,
            title: this.state.Title,
            year: this.state.Year,
            console: this.state.Console,
            rating: this.state.Rating
        }
        axios.post('http://localhost:4000/list',newGame)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name of the game: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Year the Game was released: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Console(s) game is on: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Console}
                        onChange={this.onChangeConsole}></input>
                    </div>
                    <div className="form-group">
                        <label>Image for the game: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Image}
                        onChange={this.onChangeImage}></input>
                    </div>
                    <div className="form-group">
                        <label>Rating of a game from 1-10: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Rating}
                        onChange={this.onChangeRating}></input>
                    </div>
                    <div className="form-group">
                         <input type='submit'
                         value='Add New Game'
                         className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}