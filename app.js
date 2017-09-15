'use strict';

var projects = [];

document.getElementById('menu_button').addEventListener('click', reveal);
var clicked = false;

function reveal() {
  var nav = document.getElementById('nav');
  if (!clicked){
    nav.style.display = 'block';
    clicked = true;
  }
  else if (clicked){
    nav.style.display = 'none';
    clicked = false;
  }
}

$('li.navigation:eq(0)').on('click', function(){
  $('.content').show();
  $('html, body').animate({scrollTop: 0})
})

$('li.navigation:eq(1)').on('click', function(){
  $('.content').hide();
  $('.main').appendTo('body');
})

function Project (projectData) {
  this.title = projectData.title;
  this.projectUrl = projectData.projectUrl;
  this.projectImg = projectData.projectImg;
  this.description = projectData.description;
}

Project.prototype.toHtml = function () {
  var sourceHTML = $('#newTemplate').html();
  var actualTemplate = Handlebars.compile(sourceHTML);
  var newRawHTML = actualTemplate(this);
  // $('#projects').prepend(newRawHTML);
  return actualTemplate(this);
}

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(proj){
  $('#projects').prepend(proj.toHtml());
})
