const express = require('express');
const securityRouter = require('./routes/security');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const typeRouter = require('./routes/type');
const commentRouter = require('./routes/comment');
const bodyparser = require('body-parser');
const verifyToken = require('./middlewares/security');
const cors = require('cors');

const app = express();
var router = express.Router();

app.use(cors());
app.use(bodyparser.json());

app.listen(3000, ()=>{
    console.log("listening");
});

app.use('/', securityRouter);

//Toutes les routes placés après sont protégés par le middleware 
app.use(verifyToken);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/types', typeRouter);

app.use('/api/v1', router);

app.get('/hello',(req, res)=>{
    res.send('Hello you ! ');
});

app.post('/hello',(req,res)=>{
    res.send('I got it ! ');
});