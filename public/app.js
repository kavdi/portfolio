'use strict';

Project.all = [];

$('#menu_button').on('click', reveal);
var clicked = false;

function reveal(event) {
  if (!clicked){
    $('#nav').css('display', 'block');
    clicked = true;
  }
  else if (clicked){
    $('#nav').css('display', 'none');
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
  return actualTemplate(this);
}

Project.loadAll = function(projectData){

  projectData.forEach(function(projectObject) {
    Project.all.push(new Project(projectObject));
  });

  Project.all.forEach(function(proj){
    $('#projects').prepend(proj.toHtml());
  })
}

Project.getAll = function(){
  if (localStorage.projectData){
    Project.loadAll(JSON.parse(localStorage.projectData))
  }
  else {
    $.get('/projects.json')
      .then(function(response){
        localStorage.projectData=JSON.stringify(response);
        Project.loadAll(response);
      })
  }
}
Project.getAll();
