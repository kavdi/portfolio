'use strict';

const EX = require('express');
const PRS = require('body-parser').urlencoded({extended: true});
const app = EX();
const PORT = process.env.PORT || 3000;

app.use(EX.static('public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.get('*', function(request, response){
  response.sendFile('404.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`Currently on port ${PORT}`);
});
