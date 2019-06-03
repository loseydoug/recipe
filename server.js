const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');

const ddbTable = process.env.STARTUP_TABLE || "RecipeApp";
AWS.config.region = process.env.REGION || "us-east-2";
const app = express();

const ddb = new AWS.DynamoDB();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
	return res.send('pong' + ddbTable);
});

app.get('/recipes', function(req, res) {
	// return res.send("test")
	ddb.getItem({
	    TableName: ddbTable,
	    Key:{
	        "name": { "S": "recipe-1" }
	    }
	}, (err, data) => { return res.send({err, data})});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.route('/recipe/:name')
	.put((req, res) => {
		return res.send("test")
	})
	.delete((req, res) => {
	
	});

app.get('/ingredients', function(req, res) {

});

app.route('/ingredient/:name')
	.put((req, res) => {
	
	})
	.delete((req, res) => {
	
	});


app.listen(process.env.PORT || 8080);