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
            name: 'When Squirrels attack!',
            author: 'Chamo Smith'
        },
        {
            name: 'Too much hot sauce on my tacos.',
            author: 'Mary Lou'
        },
        {
            name: 'Who ate my pizza?!',
            author: 'Mitchell'
        },
        {
            name: "There's a monster under my bed.",
            author: 'Ron'
        },
        {
            name: '1 plus 1 equals green.',
            author: 'Vince'
        }
    ]
}




app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedCards: fakeApi(), listExist: list});
});


app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
