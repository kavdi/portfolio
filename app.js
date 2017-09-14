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
  var $newProject = $('.template').clone();
  $newProject.attr('class', '');
  $newProject.find('a').attr('href', this.projectUrl)
  $newProject.find('img').attr('src', this.projectImg)
  $newProject.find('h1').text(this.title);
  $newProject.find('p').text(this.description);
  $('#projects').prepend($newProject);
}

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

for (var i = 0; i < projects.length; i++){
  projects[i].toHtml();
}
