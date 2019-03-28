const expressHandlebars = require('express-handlebars')
const app = require('./app').app
const initRoutes = require ('./routes')

const port = 3000

app.engine('hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

initRoutes(app)

app.listen(port, () => console.log(`App is listening on port ${port}!`))

module.exports = { expressHandlebars }