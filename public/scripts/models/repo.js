'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    repos.all = [];
    $.get('/github/user/repos', function (repo){
      repo.map(ele => {
        repos.all.push(ele);
      })
      callback();
    })
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
