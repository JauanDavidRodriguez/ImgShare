const path = require("path");
const exphbs = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const morgan = require("morgan");
const multer = require("multer");
const express = require("express");
const Handlebars = require('handlebars')
const routes = require("../routes/index");
const errorHandler = require("errorHandler");

module.exports = app => { 
	//settings
	app.set("port", process.env.PORT || 3001);
	app.set('views', path.join(__dirname, '../views'));
	app.engine(".hbs", exphbs({
		 defaultLayout: "main",
	     layoutsDir: path.join(app.get("views"), "layouts"),
	     partialsDir: path.join(app.get("views"), "partials"),
	     helpers: require("./helpers"),
	     extname: ".hbs",
	     handlebars: allowInsecurePrototypeAccess(Handlebars)
	}));
	app.set("view engine",".hbs");
	//middlewares
	app.use(morgan("dev"));
	app.use(multer({dest: path.join(__dirname,"../public/upload/temp")}).single("image"));
	app.use(express.urlencoded({extended: false }));
	app.use(express.json()); //como ajax me envia objetos necesito entenderlos por lo tanto escribi esto
	
	//routes

	routes(app);

	//errrorhandlers
	if ("development" === app.get("env")) {
		app.use(errorHandler());
	}  
	//staticfiles

	app.use("/public",express.static(path.join(__dirname, "../public")));
	return app;
};