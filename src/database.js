"use strict"

const mongoose = require("mongoose");
const {database} = require("./keys");
mongoose.connect(database.URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(db => console.log("DB se acaba de conectar"))
	.catch(err => console.error(err));