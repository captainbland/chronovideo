// Generated by LiveScript 1.4.0
/*Copyright Jaron Shulver 2015*/
(function(){
  var express, http, bl, blandlib, swallow, WebSocketServer, websocket, x$, server, onWsMsg, y$, wsServer, z$, app;
  express = require('express');
  http = require('http');
  bl = blandlib = require('./blandlib.ls');
  swallow = bl.swallow;
  WebSocketServer = websocket = require('websocket').server;
  x$ = server = http.createServer(function(){});
  x$.listen(8080, function(req, res){});
  onWsMsg = function(req, msg){
    return {};
  };
  y$ = wsServer = new WebSocketServer({
    httpServer: server
  });
  y$.on('request', function(req){
    var x$, connection;
    x$ = connection = req.accept(null, req.origin);
    x$.on('message', function(msg){
      switch (false) {
      case msg.type !== 'utf8':
        console.log(msg);
        return onWsMsg(req, bl.safe(JSON.parse, msg.utf8Data));
      }
    });
    x$.on('close', function(con){
      return console.log("close!");
    });
    return x$;
  });
  console.log("websocket server created " + wsServer);
  z$ = app = express();
  z$.route('/').get(function(req, res, next){
    return res.send('Hello World');
  });
  z$.listen(8000);
}).call(this);
