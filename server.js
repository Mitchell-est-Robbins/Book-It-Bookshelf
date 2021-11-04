const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3005;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sequelize = require('./config/connection');
// const { ENGINE_METHOD_CIPHERS } = require('constants');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({helpers})

const sess = {
  secret: 'secretCode',
  cookie: {
    expires: 600000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess))

app.use(routes)
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

sequelize.sync({ force: false });

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`)
})