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
    console: String,
    image: String,
    rating: Number
})


const GameModel = mongoose.model("game", gameSchema)


app.get('/list', (req, res) => {
    GameModel.find((err, data) => {
        res.json(data)
    })

})

//lists sinle entry searched in url
app.get('/list/:id',(req,res)=>{
    console.log(req.params.id) 

    GameModel.findById(req.params.id, (err,data)=>{
        res.json(data)
    })
})

//applies the updates made to the document
app.put('/list/:id',(req, res)=>{
    console.log("Updating: " + req.params.id)
    console.log(req.body)

    GameModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

//deletes entry from mongodb
app.delete('/list/:id',(req,res)=>{
    console.log("Delete Game: "+req.params.id)

    GameModel.deleteOne({_id: req.params.id},
        (error,data)=>{
            if(error)
                res.send(error)
            res.send(data)
        })
})

//gives a list of the entries
app.post('/list', (req, res) => {
    console.log('Recieved')
    console.log(req.body.title)
    console.log(req.body.year)
    console.log(req.body.console)

    GameModel.create({
        title: req.body.title,
        year: req.body.year,
        console: req.body.console,
        image: req.body.image,
        rating: req.body.rating
    })

})

//counts number of entries
app.get('/count', (req, res) => {
    GameModel.countDocuments((err, data) => {
        res.json(data)
    })

})

app.get('/test', (req, res) => {
 res.sendFile(__dirname + '/index.html')
})

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/../build/index.html'))
})    

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})