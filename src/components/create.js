import React from "react";
import axios from "axios";

export class Create extends React.Component{
    
    constructor(){
        super()
        
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onChangeConsole = this.onChangeConsole.bind(this)
        
        this.state ={
            Title: '',
            Year: '',
            Console: ''
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
    
    onSubmit(e){
        e.preventDefault()
        alert("Name: "+this.state.Title + " Year: "+this.state.Year + " Console: "+this.state.Console)
        
        const newGame = {
            title: this.state.Title,
            year: this.state.Year,
            console: this.state.Console
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
                         <input type='submit'
                         value='Add Name'
                         className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}