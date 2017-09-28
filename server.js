'use strict';

const PG = require('pg');
const FS = require('fs');
const EX = require('express');
const PRS = require('body-parser').urlencoded({extended: true});
const app = EX();
const PORT = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');
const conString = process.env.DATABASE_URL;

app.use(EX.static('./public'));

app.get('/github/*', proxyGitHub);
function proxyGitHub(req, res) {
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('*', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`Currently on port ${PORT}`);
});
