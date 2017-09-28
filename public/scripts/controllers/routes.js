'use strict';
var app = app || {};

page('/', app.projectView.index);
page('/about', app.aboutView.index);
page('*', function () {
  $('section').show().siblings().hide();
})
page();
