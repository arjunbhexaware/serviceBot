var express=require('express');
var app= express();
var bodyParser= require('body-parser');
var serverPort=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var apiai= require('apiai');
var appToken=require('f5997636f22e42d88023dc564bed30d5');
var request = appToken.textRequest('Hi', {
    sessionId: 'my'
});
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
request.end();
app.post('/',function(req,res){
console.log(req.body.result);
});
app.listen(serverPort, function(){
    console.log('AI agent running on: ' + serverPort);
});