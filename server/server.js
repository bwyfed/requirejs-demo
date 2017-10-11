/**
 * Created by Bianwangyang on 2017/8/16.
 */

const opn = require('opn');
const express = require('express');
const fs = require('fs');
const path = require('path');
const appconf = require('../application.json');
const app = express();
console.log('application.json:');
console.log(appconf);
const port = 3000;
const uri = 'http://localhost:' + port + '/index.html';
//根据配置的环境是开发还是部署，托管静态资源的目录页不同
let staticDir;
if(appconf.debug) {
    //开发环境，托管static下的src目录
    staticDir = path.join(__dirname,'../static','./src');
    console.log('开发环境');
} else {
    //生产环境，托管static下的build目录
    staticDir = path.join(__dirname,'../static','./build-gulp');
    console.log('生产环境');
}
app.use(express.static(staticDir));
//代理template下面的html文件，使得前端能直接访问到它们。
app.use(express.static(path.join(__dirname,'../template')));
// app.use(express.static(path.join(__dirname,'../client/index.html')));
app.use('/api/whitelist', function(req, res){
    fs.readFile(path.join(__dirname, "../server/whitelist.json"), function (err,data) {
        if(err) {
            console.log(err.stack);
            return;
        }
        console.log(data.toString());
        let senddata = data.toString();
        res.send(senddata);
    });
});

app.use('/api/report', function(req, res) {
    console.log(req);
    res.setHeader('x-abc','xyz');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','GET,POST');
    res.end("report success");
});
/*
app.use('/',function (req,res) {
    res.sendFile(path.join(__dirname,'../client/test.html'));
});
*/
app.listen(port);

console.log('Server running at '+ uri +'\n');
opn(uri);

module.exports = app;