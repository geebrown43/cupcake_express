const express = require('express')
const cupcakes = require('./data/cupcakes')
const queries = require('./data/queries')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.set('view engine', 'hbs')
app.use(express.static('public'))

app.listen(port, () => {
    console.log("Listening on port:" + port)
})

app.get('/', (req, res) => {
    res.render('index', {
        title: 'cupcakes_express',
        cupcakes: cupcakes
    })
})