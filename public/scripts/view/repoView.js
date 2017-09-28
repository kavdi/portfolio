
'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    $('.main').show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    $('#github').append(
      app.repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(app);
