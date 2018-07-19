// 创建一个express应用
let express = require('express');
let app = express();
// 基于app的服务器
let http = require('http').Server(app)
//创建socket应用
let io = require('socket.io')(http)
// 路径模块
let path = require('path')

app.use(express.static(path.join(__dirname,'pages')))
// 接收请求
app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/index.html')
})


// 监听端口
http.listen(3000,function(){
    console.log('服务器已开启。。。')
})