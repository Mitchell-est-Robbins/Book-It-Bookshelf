const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3306;

const sequelize = require('./config/config');
const { ENGINE_METHOD_CIPHERS } = require('constants');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'secretCode',
  cookie{},
  resave: false,
  saveUninitialized: true,
  store: new SequalizeStore({
    db: // TODO
  })
};


// PUT
app.use();
app.use();

app.engine('handlebars, hbs.engine')
app.set('view engine', 'handlebars')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});



----


app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or shows "No character found"
app.get('/api/characters/:character', (req, res) => {
  // Grab the selected parameter
  const chosen = req.params.character;
  console.log(chosen);

  // Check each character routeName and see if the same as "chosen"
  for (let i = 0; i < characters.length; i++) {
    // If the statement is true, send the character back as JSON,
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // otherwise send back "false"
  return res.json(false);
});

// Listener

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});