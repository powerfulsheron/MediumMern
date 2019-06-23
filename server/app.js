const db =  require ('./lib/db');
const User =  require ('./models/user');
const express = require('express');
const securityRouter = require('./routes/security');
const userRouter     = require('./routes/user');
const bodyparser = require('body-parser');
const verifyToken = require('./middlewares/security');
const cors = require('cors');

// db.once('open', ()=>{
//     const newUser = new User({
//         name: "Niska",
//         surname: "Réseau",
//         email:"lorenzo.canavaggio@laposte.net",
//         password:"MaxLeBgal",
//         birthdate: new Date('2018-01-01')
//     });
//     newUser.save().then(data => console.log(data)).catch(error => console.log(error));
//     User.find().then(data=>console.log(data));
//     let user = new User({
//         name:"Fred",
//         surname: "Perry",
//         birthdate: new Date(),
//         email:"fred.perry@gmail.fr",
//         password:"yes"
//     });
//     user.register().then(data => console.log(data));
//     User.login(user.email, user.password)
//     .then(user=> console.log(user))
//     .catch(error => console.log(error));
//     User.find().then(data=>console.log(data));

// });


const app = express();
var router = express.Router();

app.use(cors());
app.use(bodyparser.json());

app.use('/', securityRouter);

app.listen(3000, ()=>{
    console.log("listening");
});

//Toutes les routes placés après sont protégés par le middleware 
app.use(verifyToken);

router.use('/users', userRouter);

app.use('/api/v1', router);

app.get('/hello',(req, res)=>{
    res.send('Hello you ! ');
});

app.post('/hello',(req,res)=>{
    res.send('I got it ! ');
});

// docker-compose up server