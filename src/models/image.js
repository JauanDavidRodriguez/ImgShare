const mongoose = require("mongoose");
const { Schema } = mongoose;
const path = require('path');
const ImageSchema = new Schema ({
	title: { type: String },
	description: { type: String},
	filename: { type: String},
	views:  { type: Number, default: 0},
	likes: { type: Number, default: 0},
	timestamp: { type: Date, default: Date.now}
});

ImageSchema.virtual('uniqueId')
	.get( function () {
		
		var a = this.filename.replace(path.extname(this.filename), '')
		
		return a;
	})


module.exports = mongoose.model('Image', ImageSchema);