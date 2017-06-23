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
var imgXXI = document.getElementsByClassName('twenty-one')[0];
var imgXXII = document.getElementsByClassName('twenty-two')[0];
var imgXXIII = document.getElementsByClassName('twenty-three')[0];
var imgXXIV = document.getElementsByClassName('twenty-four')[0];
var imgXXV = document.getElementsByClassName('twenty-five')[0];

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
console.log (bag);
var chair = new Image('chair', './assets/chair.jpg');
console.log (bag);
