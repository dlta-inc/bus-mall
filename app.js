'use strict';

function Image(name, path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicked = 0;
}

/*Create a variable to store each image into.  This will allow you to call on images with shorthand text and get data from the Image constructor function.
EXAMPLE:: var yadaya = new Image('name', 'path');

- var yadayada = /yadayada is the short hand name your giving for your variable for easy recall later

new + (put name of constructor function here.  No parenthesis or quotes)

then in quotes include your paramenters ('first parameter', 'second parameter')*/

//VARIABLES TO STORE THE DATA NEEDED FOR EACH IMAGE.  I'M CALLING THE IMAGE CONSTRUCTOR FUNCTION IN EACH NEW VARIABLE I DEFINE SO THAT I MAY CONSOLODTE THE DATA I NEED (COUNT OF IMAGE CLICK AND COUNT OF IMAGE DISPLAYED).
var bag = new Image('bag', './assets/bag.jpg');
var banana = new Image('banana', './assets/banana.jpg');
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
var boots = new Image('boots', './assets/boots.jpg');
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
var chair = new Image('chair', './assets/chair.jpg');
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
var dogduck = new Image('dogduck', './assets/dog-duck.jpg');
var dragon = new Image('dragon', './assets/dragon.jpg');
var pen = new Image('pen', './assets/pen.jpg');
var petsweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
var scissors = new Image('scissors', './assets/scissors.jpg');
var shark = new Image('shark', './assets/shark.jpg');
var sweep = new Image('sweep', './assets/sweep.png');
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
var usb = new Image('usb', './assets/usb.gif');
var watercan = new Image('water-can', './assets/water-can.jpg');
var wineglass = new Image('wine-glass', './assets/wine-glass.jpg');
var imgArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
console.table(imgArray);

var imgTotal = document.querySelectorAll('img'); document.getElementById('twenty').innerHTML = imgTotal.length;
console.log(imgTotal);

var imgI = document.getElementById('one')[0];
var imgII = document.getElementById('two')[0];
var imgIII = document.getElementById('three')[0];
var imgIV = document.getElementById('four')[0];
var imgV = document.getElementById('five')[0];
var imgVI = document.getElementById('six')[0];
var imgVII = document.getElementById('seven')[0];
var imgVIII = document.getElementById('eight')[0];
var imgIX = document.getElementById('nine')[0];
var imgX = document.getElementById('ten')[0];
var imgXI = document.getElementById('eleven')[0];
var imgXII = document.getElementById('twelve')[0];
var imgXIII = document.getElementById('thirteen')[0];
var imgXIV = document.getElementById('fourteen')[0];
var imgXV = document.getElementById('fifteen')[0];
var imgXVI = document.getElementById('sixteen')[0];
var imgXVII = document.getElementById('seventeen')[0];
var imgXVIII = document.getElementById('eighteen')[0];
var imgXIX = document.getElementById('nineteen')[0];
var imgXX = document.getElementById('twenty')[0];




/*var addEvent = window.addEventListener ? function (elem, type, method) {
    elem.addEventListener(type, method, false);
} : function (elem, type, method) {
    elem.attachEvent('on' + type, method);
};

addEvent(buttons[0], 'click', incrementIndex);
addEvent(buttons[1], 'click', incrementIndex);*/
