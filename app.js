'use strict';

function Project (name, url, img, description) {
  this.name = name;
  this.url = url;
  this.img = img;
  this.description = description;
}

document.getElementById('menu_icon').addEventListener('click', reveal);
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
