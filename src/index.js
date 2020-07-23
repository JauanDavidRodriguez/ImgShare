'use strict'

const express = require("express");
const config = require ("./server/config");

//database
const app = config(express());

require('./database');

//starting the server
app.listen(app.get("port"), () => {

	console.log("server on port", app.get('port'))
});