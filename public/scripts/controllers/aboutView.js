'use strict';

var app = app || {};

(function (module){
  const aboutView = {};

  aboutView.index = () => {
    $('.main').show().sibling().hide();
  }
})(app);
