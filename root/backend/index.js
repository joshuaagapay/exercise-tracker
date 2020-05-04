const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
	.then(() => console.log("Successfully Connected to MongoDB"))
	.catch(err => console.log(err))

const { userRoutes } = require('./components/users');
app.use('/api/v1', userRoutes);

const { exerRoutes } = require('./components/exercises');
app.use('/api/v1', exerRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listen to port ${port}`));
