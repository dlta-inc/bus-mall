'use strict';

var imgI = document.getElementsById('one')[0];
var imgII = document.getElementsById('two')[0];
var imgIII = document.getElementsById('three')[0];
var imgIV = document.getElementsById('four')[0];
var imgV = document.getElementsById('five')[0];
var imgVI = document.getElementsById('six')[0];
var imgVII = document.getElementsById('seven')[0];
var imgVIII = document.getElementsById('eight')[0];
var imgIX = document.getElementsById('nine')[0];
var imgX = document.getElementsById('ten')[0];
var imgXI = document.getElementsById('eleven')[0];
var imgXII = document.getElementsById('twelve')[0];
var imgXIII = document.getElementsById('thirteen')[0];
var imgXIV = document.getElementsById('fourteen')[0];
var imgXV = document.getElementsById('fifteen')[0];
var imgXVI = document.getElementsById('sixteen')[0];
var imgXVII = document.getElementsById('seventeen')[0];
var imgXVIII = document.getElementsById('eighteen')[0];
var imgXIX = document.getElementsById('nineteen')[0];
var imgXX = document.getElementsById('twenty')[0];
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
