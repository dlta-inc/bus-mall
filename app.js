'use strict';

//Creating two seperate arrays to pull random pics from to display.  My logic is that at each interval it cannot duplicate an image previously shown because it's not from the same array//
var oddImageArray = [];
var evenImageArray = [];

var image1 = document.getElementById('0');
var image2 = document.getElementById('1');
var image3 = document.getElementById('2');

function OddImage(name, path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicked = 0;
  oddImageArray.push(this);
};

function EvenImage(name, path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicked = 0;
  evenImageArray.push(this);
};
/*Create a variable to store each image into.  This will allow you to call on images with shorthand text and get data from the Image constructor function.
EXAMPLE:: var yadaya = new Image('name', 'path');

- var yadayada = /yadayada is the short hand name your giving for your variable for easy recall later

new + (put name of constructor function here.  No parenthesis or quotes)

then in quotes include your paramenters ('first parameter', 'second parameter')*/

new EvenImage('bag', './assets/bag.jpg');
new OddImage('banana', './assets/banana.jpg');
new EvenImage('bathroom', './assets/bathroom.jpg');
new OddImage('boots', './assets/boots.jpg');
new EvenImage('breakfast', './assets/breakfast.jpg');
new OddImage('bubblegum', './assets/bubblegum.jpg');
new EvenImage('chair', './assets/chair.jpg');
new OddImage('cthulhu', './assets/cthulhu.jpg');
new EvenImage('dogduck', './assets/dog-duck.jpg');
new OddImage('dragon', './assets/dragon.jpg');
new EvenImage('pen', './assets/pen.jpg');
new OddImage('pet-sweep', './assets/pet-sweep.jpg');
new EvenImage('scissors', './assets/scissors.jpg');
new OddImage('shark', './assets/shark.jpg');
new EvenImage('sweep', './assets/sweep.png');
new OddImage('tauntaun', './assets/tauntaun.jpg');
new EvenImage('unicorn', './assets/unicorn.jpg');
new OddImage('usb', './assets/usb.gif');
new EvenImage('water-can', './assets/water-can.jpg');
new OddImage('wine-glass', './assets/wine-glass.jpg');
// THIS BECAME OBSOLETE once I decided to go with two seperate arrays // var imgArray = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];
console.table(oddImageArray);
console.log(oddImageArray.length);

console.table(evenImageArray);
console.log(evenImageArray.length);

var randomOddImageArray = (function() {
  var oddRandomizer = Math.floor(Math.random()* oddImageArray.length);
  var oddSplice = oddImageArray.splice(oddRandomizer, 3);
  console.log(oddSplice);
  addToDom(oddSplice);
});


var randomEvenImageArray = (function () {
  var evenRandomizer = Math.floor(Math.random()* evenImageArray.length);
  var evenSplice = evenImageArray.splice(evenRandomizer, 3);
  console.log(evenSplice);
  addToDom(evenSplice);
});

function addToDom (array){
  image1.src= array[0].path;
  image1.name= array[0].name;
  // image1.displayed = array[0].displayed;
  // console.log(image1.displayed);
  // image1.clicked = array[0].clicked;
  // console.log(image1.clicked);
  image2.src= array[1].path;
  image2.name= array[1].name;
  image3.src= array[2].path;
  image3.name= array[2].name;
};

randomEvenImageArray();

/* CREATE FUNCTION THAT WILL CIRCLE THROUGH IMAGE ARRAYS
document.write(evenPicsToDisplay);
//then track click here//
//track displayed times here as well//
document.write(oddPicsToDisplay);
//then track click here// */





//THIS IS THE GRAVEYARD CODE :(//
// var imgI = document.getElementById('one')[0];
// var imgII = document.getElementById('two')[0];
// var imgIII = document.getElementById('three')[0];
// var imgIV = document.getElementById('four')[0];
// var imgV = document.getElementById('five')[0];
// var imgVI = document.getElementById('six')[0];
// var imgVII = document.getElementById('seven')[0];
// var imgVIII = document.getElementById('eight')[0];
// var imgIX = document.getElementById('nine')[0];
// var imgX = document.getElementById('ten')[0];
// var imgXI = document.getElementById('eleven')[0];
// var imgXII = document.getElementById('twelve')[0];
// var imgXIII = document.getElementById('thirteen')[0];
// var imgXIV = document.getElementById('fourteen')[0];
// var imgXV = document.getElementById('fifteen')[0];
// var imgXVI = document.getElementById('sixteen')[0];
// var imgXVII = document.getElementById('seventeen')[0];
// var imgXVIII = document.getElementById('eighteen')[0];
// var imgXIX = document.getElementById('nineteen')[0];
// var imgXX = document.getElementById('twenty')[0];

// function clicksubmit(){
//     var bagpic = document.getElementById('bag');
//     console.log('vote for' + bagpic);
//     var bathroompic = document.getElementById('bathroom');
//     console.log('vote for' + bathroompic);
//     var bananapic = document.getElementById('banana');
//     console.log('vote for' + bananapic);
//
// }

/*var addEvent = window.addEventListener ? function (elem, type, method) {
    elem.addEventListener(type, method, false);
} : function (elem, type, method) {
    elem.attachEvent('on' + type, method);
};

addEvent(buttons[0], 'click', incrementIndex);
addEvent(buttons[1], 'click', incrementIndex);*/
