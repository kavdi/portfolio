'use strict';

const PG = require('pg');
const FS = require('fs');
const EX = require('express');
const PRS = require('body-parser').urlencoded({extended: true});
const app = EX();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');
const conString = 'postgres://localhost:5432/portfolio';

app.use(EX.static('public'));

// app.get('/', function(request, response){
//   response.sendFile('index.html', {root: './public'});
// });

app.get('*', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`Currently on port ${PORT}`);
});
