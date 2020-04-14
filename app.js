const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

let tutorialAPI = require('./routes/tutorial')

app.use('/api/v1', tutorialAPI)
let port = 5000;
app.listen(port, function(){
    console.log('Server started at port ' + port)
});