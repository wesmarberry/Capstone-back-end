const mongoose = require('mongoose');
const Task = require('./task');
const Entertainment = require('./entertainment')
const Podcast = require('./podcast')

const UserSchema = new mongoose.Schema({
	email: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	lat: Number,
	lng: Number,
	tasks:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task'
	}],
	entertainment:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Entertainment'
	}],
	podcasts:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Podcast'
	}],
	searches: Array,
	friends: Array,

});



module.exports = mongoose.model('User', UserSchema);