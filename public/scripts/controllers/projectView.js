'use strict';

var app = app || {};

(function (module){
  const projectView = {};

  $('#sos').hide();
  projectView.index = () => {
    app.Project.getAll()
  }
})(app);
