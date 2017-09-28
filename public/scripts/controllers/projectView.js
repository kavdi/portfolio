'use strict';

var app = app || {};

(function (module){
  const projectView = {};
  projectView.index = () => {
    $('section').hide();
    $('.main').hide();
    $('#projects').show();
    app.Project.getAll()
  }
  module.projectView = projectView;
})(app);
