const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
	console.log(`We are connected to database ${config.database}`)
});

const app = express();
const users = require('./routes/users');
const port = process.env.PORT || 8000

app.use(cors())

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, ()=>{
	console.log(`We are listening on port ${port}`)
})