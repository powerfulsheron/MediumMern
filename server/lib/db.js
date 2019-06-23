const mongoose = require ('mongoose');
mongoose.connect('mongodb://mongo',{
    user:process.env.MONGODB_USER,
    pass:process.env.MONGODB_PASS,
    dbName:process.env.MONGODB_DBNAME,
    useNewUrlParser:true});

const db = mongoose.connection;
db.once('open', ()=>console.log('Connected'));
db.on('error',(error)=>console.log('Error', error));

module.exports = mongoose.connection;