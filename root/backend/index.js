const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("Successfully Connected to MongoDB"))
.catch(err => console.log(err))

const userRoutes = require('./routes/userAPI');
app.use('/api/v1', userRoutes);

const exerRoutes = require('./routes/exerciseAPI');
app.use('/api/v1', exerRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listen to port ${port}`));
