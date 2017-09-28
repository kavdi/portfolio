'use strict';

var app = app || {};


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

// $('li.navigation:eq(0)').on('click', function(){
//   $('.content').show();
//   $('html, body').animate({scrollTop: 0});
// });
//
// $('li.navigation:eq(1)').on('click', function(){
//   $('.content').hide();
//   $('.main').appendTo('body');
// });

(function(module){
  function Project (projectData) {
    this.title = projectData.title;
    this.projectUrl = projectData.projectUrl;
    this.projectImg = projectData.projectImg;
    this.description = projectData.description;
  }

  Project.all = [];

  Project.Title = () => {
    return Project.all.map(ele => ele.title)
                      .reduce((aggregator, title) => {
                        aggregator.push(title);
                        return aggregator;
                      }, []);
  };

  Project.prototype.toHtml = function () {
    var sourceHTML = $('#newTemplate').html();
    var actualTemplate = Handlebars.compile(sourceHTML);
    var newRawHTML = actualTemplate(this);
    return actualTemplate(this);
  };

  Project.loadAll = projectData => {
    Project.all = projectData.map(ele => new Project(ele));
    Project.all.map(ele => {
      $('#projects').prepend(ele.toHtml());
    });
  };


  Project.getAll = function(){
    $('#projects').empty();
    if (localStorage.projectData){
      Project.loadAll(JSON.parse(localStorage.projectData));
    }
    else {
      $.get('/projects.json')
        .then(function(response){
          localStorage.projectData=JSON.stringify(response);
          Project.loadAll(response);
        });
    }
  };
  module.Project = Project;
})(app);
