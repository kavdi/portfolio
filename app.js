'use strict';

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

function Project (projectData) {
  this.title = projectData.title;
  this.projectUrl = projectData.url;
  this.projectImg = projectData.img;
  this.description = projectData.description;
}

Project.prototype.toHtml = function () {
  var $newProject = $('.template').clone();
  $newProject.attr('class', '');
  $newProject.find('a').attr('href', this.projectUrl)
                       .attr('src', this.projectImg)
  $newProject.find('h1').text(this.title);
  $newProject.find('p').text(this.description);
}
