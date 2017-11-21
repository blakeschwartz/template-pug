
let express = require('express')
let stylus = require('stylus');
let bodyParser = require('body-parser')
let path = require('path')
let favicon = require('serve-favicon')
let coffeeMiddleware = require('coffee-middleware');

// Setup Express
let app = express()

// Setup stylus - must be done before 'express.static'
app.use(stylus.middleware({
    src: __dirname + '/stylus',
    dest: __dirname + '/public/css/'
}))

// Setup Express basics
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon(__dirname + '/public/favicon.ico'))

// Setup Pug views
app.set("views", `${__dirname}/views`)
app.set('view engine', 'pug')

// Setup CoffeeScript transpiler
app.use(coffeeMiddleware({
    dest: __dirname + '/public/js',
    src: __dirname + '/coffee',
    prefix: '/js',
    compress: true,
    bare: true
}))

// Setup routes
app.get('/:page/:subpage', (req, res) => {
    page = req.params.page
    subpage = req.params.subpage
    res.render(path.join(page, subpage))
})

app.get('/:page', (req, res) => {
    page = req.params.page
    res.render(page)
})

app.get('/', (req, res) => {
    res.render("index")
})

// Start Server
app.listen(8080, () =>
    console.log(`App running in ${__dirname}, listening on port 8080!`)
)

