const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const cors = require('cors')
const mongoose = require('mongoose');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')))
app.use('/static',express.static(path.join(__dirname, 'build//static')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://admin:admin@cluster0.pkagd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(strConnection);
}

const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
    title: String,
    year: String,
    console: String
})

const GameModel = mongoose.model("game", gameSchema)

app.get('/', (req, res) => {
    res.send('Work pls')
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
    res.send('Hello ' + req.params.name)
})

app.get('/list', (req, res) => {
    /* const myGames = [
         {
             "Title":"The Legend of Zelda",
             "Year":"1986",
             "Console":"NES"
         },
         {
             "Title":"A Link To The Past",
             "Year":"1991",
             "Console":"SNES"
         },
         {
             "Title":"Ocarina of Time",
             "Year":"1998",
             "Console":"N64"
         },
         {
             "Title":"Wind Waker HD",
             "Year":"2013",
             "Console":"Wii U"
         } 
     ]*/
    GameModel.find((err, data) => {
        res.json(data)
    })

})

app.get('/list/:id',(req,res)=>{
    console.log(req.params.id) 

    GameModel.findById(req.params.id, (err,data)=>{
        res.json(data)
    })
})

app.put('/list/:id',(req,res)=>{
    console.log("Update Game: "+req.params.id)
    console.log(req.body)

    GameModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
        (error,data)=>{
            res.send(data)
        })
})

app.delete('/list/:id',(req,res)=>{
    console.log("Delete Game: "+req.params.id)

    GameModel.deleteOne({_id: req.params.id},
        (error,data)=>{
            if(error)
                res.send(error)
            res.send(data)
        })
})

app.post('/list', (req, res) => {
    console.log('Recieved')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.console)

    GameModel.create({
        title: req.body.title,
        year: req.body.year,
        console: req.body.console
    })

})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/../build/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})