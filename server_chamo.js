const express = require('express');
const app = express();
const port = 3000;
const list = true;

const handlebars = require('express-handlebars');


app.set('view engine', 'hbs');


app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('public'));




const fakeApi = () => {
    return [
        {
            name: 'Counter spell',
            type: 'control'
        },
        {
            name: 'Krenko, Mob boss',
            type: 'aggro'
        },
        {
            name: 'Doomblade',
            type: 'control'
        },
        {
            name: 'Werewolf pack leader',
            type: 'aggro'
        },
        {
            name: 'Dissipate',
            type: 'control'
        }
    ]
}




app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedCards: fakeApi(), listExist: list});
});


app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
