"use strict";

var message = ("Hello from external JavaScript!");

console.log(message);

alert('Welcome to my Website!')

// var welcome = ('Welcome to my website!')
// alert(welcome);

var favColor = prompt('What is your favorite color?');
alert('Great ' + favColor + ' is my favorite color too!');

var littleMerDays = prompt("How many days did you rent The Little Mermaid")
var broBearDays = prompt("How many days did you rent Brother Bear?");
var herculesDays = prompt("How many days did you rent Hercules?");

var rentMovieBill = ((parseInt(littleMerDays)*3) + (parseInt(broBearDays)*3) + (parseInt(herculesDays)*3));
alert('Total cost to rent is $' + rentMovieBill + '.');




