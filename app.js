'use strict';

var imgI = document.getElementsByClassName('one')[0];
var imgII = document.getElementsByClassName('two')[0];
var imgIII = document.getElementsByClassName('three')[0];
var imgIV = document.getElementsByClassName('four')[0];
var imgV = document.getElementsByClassName('five')[0];
var imgVI = document.getElementsByClassName('six')[0];
var imgVII = document.getElementsByClassName('seven')[0];
var imgVIII = document.getElementsByClassName('eight')[0];
var imgIX = document.getElementsByClassName('nine')[0];
var imgX = document.getElementsByClassName('ten')[0];
var imgXI = document.getElementsByClassName('eleven')[0];
var imgXII = document.getElementsByClassName('twelve')[0];
var imgXIII = document.getElementsByClassName('thirteen')[0];
var imgXIV = document.getElementsByClassName('fourteen')[0];
var imgXV = document.getElementsByClassName('fifteen')[0];
var imgXVI = document.getElementsByClassName('sixteen')[0];
var imgXVII = document.getElementsByClassName('seventeen')[0];
var imgXVIII = document.getElementsByClassName('eighteen')[0];
var imgXIX = document.getElementsByClassName('nineteen')[0];
var imgXX = document.getElementsByClassName('twenty')[0];
// var imgXXI = document.getElementsByClassName('twenty-one')[0];
// var imgXXII = document.getElementsByClassName('twenty-two')[0];
// var imgXXIII = document.getElementsByClassName('twenty-three')[0];
// var imgXXIV = document.getElementsByClassName('twenty-four')[0];
// var imgXXV = document.getElementsByClassName('twenty-five')[0];

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

var bag = new Image('bag', './assets/bag.jpg');
console.log (bag);
var banana = new Image('banana', './assets/banana.jpg');
console.log (banana);
var bathroom = new Image('bathroom', './assets/bathroom.jpg');
console.log (bathroom);
var boots = new Image('boots', './assets/boots.jpg');
console.log (boots);
var breakfast = new Image('breakfast', './assets/breakfast.jpg');
console.log (breakfast);
var bubblegum = new Image('bubblegum', './assets/bubblegum.jpg');
console.log (bubblegum);
var chair = new Image('chair', './assets/chair.jpg');
console.log (bag);
var cthulhu = new Image('cthulhu', './assets/cthulhu.jpg');
console.log (cthulhu);
var dogduck = new Image('dogduck', './assets/dog-duck.jpg');
console.log (dogduck);
var dragon = new Image('dragon', './assets/dragon.jpg');
console.log (dragon);
var pen = new Image('pen', './assets/pen.jpg');
console.log (pen);
var petsweep = new Image('pet-sweep', './assets/pet-sweep.jpg');
console.log (petsweep);
var scissors = new Image('scissors', './assets/scissors.jpg');
console.log (scissors);
var shark = new Image('shark', './assets/shark.jpg');
console.log (shark);
var sweep = new Image('sweep', './assets/sweep.png');
console.log (sweep);
var tauntaun = new Image('tauntaun', './assets/tauntaun.jpg');
console.log (tauntaun);
var unicorn = new Image('unicorn', './assets/unicorn.jpg');
console.log (unicorn);
var usb = new Image('usb', './assets/usb.gif');
console.log (usb);
var watercan = new Image('water-can', './assets/water-can.jpg');
console.log (watercan);
var wineglass = new Image('wine-glass', './assets/wine-glass.jpg');
console.log (wineglass);
