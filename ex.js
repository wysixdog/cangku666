var express = require('express');
var app = express();
app.get('/',function (req,res) {
	console.log("主页GET请求");
	res.send('HELLO GXZQ');
	})

app.post('/',function (req,res) {
	console.log("主页POST请求");
	res.send('HELLO PXZQ');
	})
 
 app.get('/list_user',function (req,res) {
	console.log("/list_user GET请求");
	res.send('用户列表');
	})

app.get('/ab*cd',function (req,res) {
	console.log("abcd GET请求");
	res.send('正则匹配');
	})	

var server = app.listen(8081, function(){
	
	var host = server.address().address
	var port = server.address().port

	console.log("地址为 http://%s:%s",host ,port)
})