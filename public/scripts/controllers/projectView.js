'use strict';

var app = app || {};

(function (module){
  const projectView = {};
  $('section').hide();
  $('.main').hide();
  projectView.index = () => {
    app.Project.getAll()
  }
  module.projectView = projectView;
})(app);
