'use strict';

var app = app || {};

(function (module){
  const aboutView = {};

  aboutView.index = () => {
    app.repos.requestRepos(app.repoView.index);
  }
  module.aboutView = aboutView;
})(app);
