const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3002;

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;
mongoose.connect('mongodb://mirowa:Alexandr55@ds157064.mlab.com:57064/myfirstdb')
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    wesite: String
  },
  created_at: Date,
  updated_at: Date
})

const User = mongoose.model('User', userSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => res.send('hellow this is my site'));
app.get('/user/', (req,res) => 
  User.find({}, (err,users) => {
    if(err) throw err;
    res.send(users);
  })
);

app.get('/user_name/:name', (req, res) =>
  User.find({name: req.params.name}, (err, users) =>{
    if(err) throw err;
    res.send(users)
  })
)


app.post('/user/', (req,res) =>{
  let newUser = User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    admin: true
  });
  newUser.save((err) =>{
    if(err) throw err;
    res.send(newUser)
  })
})



app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));