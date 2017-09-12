'use strict';

var workoutGenerator = new Project('Workout Generator', 'https://famavott.github.io/Home-Workout-Generator/', 'img/kettlebell.png', 'This is a look at the final  project for 201 Code Fellows. I collaborated with Matt Favoino, Robert Bronson and Brian Wheeler. The concept was to make an easy to use workout generator that can give you a good short workout for your specific needs.')

function Project (name, url, img, description) {
  this.name = name;
  this.url = url;
  this.img = img;
  this.description = description;
}
