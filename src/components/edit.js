import React from "react";
import axios from "axios";

export class Edit extends React.Component{
    
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

    componentDidMount(){
        console.log(this.props.match.params.id)

        axios.get("http://localhost:4000/list/"+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Console:response.data.console,
                Image:response.data.image,
                Rating:response.data.rating
            })
        })
        .catch((error)=>{
            console.log(error)
        })
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
        alert("Name: "+this.state.Title + " Year: "+this.state.Year + " Console: "+this.state.Console)
        
        const newGame = {
            image:this.state.Image,
            title: this.state.Title,
            year: this.state.Year,
            console: this.state.Console,
            _id: this.state._id,
            rating: this.state.Rating
        }
        axios.put('http://localhost:4000/list/'+this.state._id,newGame)
        .then(res=>{
            console.log(res.data)
        })
        .catch()
    }
    render(){
        return(
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Title: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Year: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Console: </label>
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