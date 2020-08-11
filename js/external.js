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

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleHours = prompt('How many hours did you work at Google?')
var amazonHours = prompt('How many hours did you work at Amazon?')
var facebookHours = prompt('How many hours did you work at Facebook?')

var totalPay = ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours));
alert('Your total paycheck will be $' + totalPay + '.');

var classNotFull = true;
var noScheduleConflicts = true;
var classEnroll = (classNotFull && noScheduleConflicts);
alert("You may enroll in class.");





