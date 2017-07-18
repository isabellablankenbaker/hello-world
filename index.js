/* 
*File: index.js 
*Author: Bella Blankenbaker 
*Purpose: This is my hello, world application.
*History: 7/17/17 - File created .
*/ 

/*var msg1 = 'Hello';
var msg2 = 'This is the whole wide world right here.'; 

function checkForWorld(message){
if (message.includes('world')){
    console.log( 'Hello,'+ message);
} else{
    console.log('Goodbye.');
}
}
//console.log(checkForWorld(msg2));
console.log(checkForWorld(msg2));
*/


// Information about me; 

/*
*File:index.js
*Author: Bella Blankenbaker 
*Purpose: Practicing coding
*History: 7/17/17- file created 7/18/17- added coding practice to file
*/

console.log('Hello! My name is Bella.' );

var message1 = 'I am going to tell you a bit about me!';
var message2 = ' Icecream is one of my favorite foods.';

console.log(message1.concat(message2));

var message3 = 'I love school.';
var message4 = 'I go to school at CSAS and am going into the 8th grade.';

function checkForSchool(message){
    if (message.includes('school')){
    return message; 
} else {
    return 'Bye.';
}
}
console.log(checkForSchool(message3));
console.log(checkForSchool(message4));

var message5 = 'My dream college is Harvard.';
var message6 = ' I want to study medicine and become a surgeon.';

function concat( messageA, messageB) {
    var smushed = messageA.concat(messageB);
    return smushed;
}
console.log(concat(message5, message6 ));


