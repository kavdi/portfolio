'use strict';

var app = app || {};

(function (module){
  const projectView = {};

  projectView.index = () => {
    app.Project.getAll()
  }
})(app);
