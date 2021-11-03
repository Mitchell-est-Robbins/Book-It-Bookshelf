const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const User = require('./models/userC');
const app = express();
const port = 3000;
const list = true;



app.set('view engine', 'hbs');


// app.engine('hbs', handlebars({
//     layoutsDir: `${__dirname}/views/layouts`,
//     extname: 'hbs',
//     defaultLayout: 'index',
//     partialsDir: `${__dirname}/views/partials`
// }));


// handle bars config
app.engine('hbs', hbs({extname: 'hbs',defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'})); 
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs'); 
// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});



app.use(express.static('/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
    key: 'user_sid',
    secret: 'somesecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 600000
    }
}));


app.use((req, res, next) => {
    if (req.cookie.user_sid && !req.session.user){
        res.clearCookie('user_sid');
    }
    next();
});

const hbsContent = {userName: '', loggedin: false, title: "You are not logged in.", body: "Refresh the Page."};

// middleware fucntion to check for logged in users

const sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookie.user_sid){
        res.redirect('/dashboard');
    }else{
        next();
    }
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) =>{
    res.redirect('/login');
});


// route for signup-Page
app.route('/signup')
    .get((req, res) =>{
        // res.sendFile(__dirname + '/public/signup.html');
        res.render('signup', hbsContent);
    })
    .post((req, res) =>{
        User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(user =>{
            req.session.user = user.dataValues;
            res.redirect('/signup');
        });
    });


// route for user login
app.route('/login')
    .get((req, res) =>{
        // res.sendFile(__dirname + '/public/login.html');
        res.render('login', hbsContent);
    })
    .post((req, res) =>{
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({ where: { username: username } }).then(function(user) {
            if (!user) {
                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        hbsContent.loggedin = true;
        hbsContent.userName = req.session.user.username;
        hbsContent.title = "You are logged in."
        // res.sendFile(__dirname + '/public/dashboard.html);
        res.render('main', hbsContent);
    } else {
        res.redirect('/login');
    }
});



// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        hbsContent.loggedin = false;
        hbsContent.title = "You are logged out."
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});



// route for handling 404 errors
app.use(function (req, res, next) {
    res.status(404).send("Not found!")
});



// const fakeApi = () => {
//     return [
//         {
//             name: 'When Squirrels attack!',
//             author: 'Chamo Smith'
//         },
//         {
//             name: 'Too much hot sauce on my tacos.',
//             author: 'Mary Lou'
//         },
//         {
//             name: 'Who ate my pizza?!',
//             author: 'Mitchell'
//         },
//         {
//             name: "There's a monster under my bed.",
//             author: 'Ron'
//         },
//         {
//             name: '1 plus 1 equals green.',
//             author: 'Vince'
//         }
//     ]
// }


// app.get('/', (req, res) => {
//     res.render('main', {layout: 'index', suggestedCards: fakeApi(), listExist: list});
// });

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
