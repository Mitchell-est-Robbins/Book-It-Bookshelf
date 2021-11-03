const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const seshStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./sequelize/config');
const PORT = process.env.PORT || 3000;

const app = express();
const PORT = process.env.PORT || 3000;

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


// PUT
// app.use();
// app.use();

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.use(express.json());
app.use(require('localhost:3000/'));
app.use(require('./books')
// app.use(session(sess));
app.use(require('routes'))

app.get('/', (req, res) => {
  res.send(path.join(_dirname,'/views/index.html'))
});


app.get('/books', (req, res) =>
  res.sendFile(path.join(_dirname,'/views/index.html')
);

app.use(express.static(path.join(__dirname, 'view/')));


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  sequelize.sync({ force: false });
}); 