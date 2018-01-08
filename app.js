var express = require('express')
var app = express();
var bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

var friends = ['Igor','Artur','Eldad','Lior']

app.get('/',function(req,res){
	res.render('home')
});

app.get('/friends',function(req,res){
	res.render('friends',{friends: friends})
});

app.post('/addFriend',function(req,res){
	var newFriend = req.body.newFriend
	friends.push(newFriend)
	res.redirect('/friends')
});

app.listen(3000,function(){
	console.log('App started')
});