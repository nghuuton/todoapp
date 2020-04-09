const express = require('express');

const bodyParse = require('body-parser');

const Users = require('./routes/Users');
const tasks = require('./routes/task');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({
   extended: false
}));
app.use('/user', Users);

app.use('/api', tasks);
app.listen(3000, function () {
   console.log('Server is start!');
})